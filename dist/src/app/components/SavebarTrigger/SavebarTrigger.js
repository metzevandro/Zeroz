"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var SaveBar_1 = __importDefault(require("../SaveBar/SaveBar"));
var Progress_1 = __importDefault(require("../Progress/Progress"));
require("./SavebarTrigger.scss");
var SavebarTrigger = function (_a) {
    var children = _a.children, formChanged = _a.formChanged, handleSubmit = _a.handleSubmit, label = _a.label, handleCancelProp = _a.handleCancel, labelSave = _a.labelSave, labelCancel = _a.labelCancel;
    var _b = (0, react_1.useState)({}), formData = _b[0], setFormData = _b[1];
    var _c = (0, react_1.useState)(null), tamanhoPai = _c[0], setTamanhoPai = _c[1];
    var _d = (0, react_1.useState)(false), saving = _d[0], setSaving = _d[1];
    var _e = (0, react_1.useState)(0), progressValue = _e[0], setProgressValue = _e[1]; // Progresso inicial é 0%
    var _f = (0, react_1.useState)(null), elapsedTime = _f[0], setElapsedTime = _f[1];
    (0, react_1.useEffect)(function () {
        var updateTamanhoPai = function () {
            var paiElement = document.querySelector(".header-root");
            if (paiElement) {
                setTamanhoPai(paiElement.offsetWidth);
            }
        };
        updateTamanhoPai();
        window.addEventListener("resize", updateTamanhoPai);
        return function () {
            window.removeEventListener("resize", updateTamanhoPai);
        };
    }, []);
    var estiloFilha = tamanhoPai ? { width: "calc(".concat(tamanhoPai, "px)") } : {};
    var handleInputChange = function (name, value) {
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleCancel = function () {
        console.log("Alterações canceladas");
        setSaving(false);
        setProgressValue(0);
        setElapsedTime(null);
        // Chame a função handleCancel recebida por props
        handleCancelProp();
    };
    var handleSave = function () {
        setSaving(true); // Define saving como true ao clicar em Save
        var totalTime = 500; // Tempo total em milissegundos para alcançar 100%
        var incrementInterval = 50; // Intervalo de tempo em milissegundos entre cada incremento
        var totalIncrements = totalTime / incrementInterval; // Número total de incrementos
        var incrementAmount = 100 / totalIncrements; // Quantidade de incremento para cada intervalo
        var currentProgress = 0; // Inicializa o progresso atual como 0
        var intervalId = setInterval(function () {
            // Aumenta o valor do progresso gradualmente até 100%
            currentProgress += incrementAmount;
            setProgressValue(currentProgress);
            if (currentProgress >= 100) {
                clearInterval(intervalId); // Limpa o intervalo quando o progresso atinge 100%
                setTimeout(function () {
                    // Após um breve intervalo, redefine os estados para o estado inicial
                    setSaving(false);
                    setProgressValue(0);
                }, 500); // Define aqui o tempo em milissegundos antes de redefinir o estado
            }
            handleSubmit();
        }, incrementInterval); // Define aqui o intervalo de tempo entre cada aumento do progresso
    };
    var modifyChild = function (child, index) {
        if (react_1.default.isValidElement(child)) {
            var name_1 = child.props.name;
            return react_1.default.cloneElement(child, {
                onChange: function (e) {
                    handleInputChange(name_1, e.target.value);
                },
                value: formData[name_1] || "", // Atualiza o valor do input de acordo com o estado atual do formulário
                name: name_1,
            });
        }
        return child;
    };
    var modifiedChildren = react_1.default.Children.map(children, modifyChild);
    return (react_1.default.createElement("div", { className: "form-register-root" },
        saving && (react_1.default.createElement("div", { className: "form-register-progress" },
            react_1.default.createElement(Progress_1.default, { value: progressValue }))),
        react_1.default.createElement("div", { className: "form-register-save-bar", style: estiloFilha }, formChanged && !saving && (react_1.default.createElement(SaveBar_1.default, { labelCancel: labelCancel, labelSave: labelSave, label: label, onClickCancel: handleCancel, onClickSave: handleSave }))),
        react_1.default.createElement("div", null, modifiedChildren)));
};
exports.default = SavebarTrigger;
