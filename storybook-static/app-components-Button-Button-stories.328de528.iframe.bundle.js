"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [7467],
  {
    "./src/app/components/Button/Button.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          Skeleton: () => Skeleton,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          disable: () => disable,
          loading: () => loading,
          secondary: () => secondary,
          success: () => success,
          warning: () => warning,
          with_Icon: () => with_Icon,
        });
      var _Primary_parameters,
        _Primary_parameters_docs,
        _Primary_parameters1,
        _secondary_parameters,
        _secondary_parameters_docs,
        _secondary_parameters1,
        _success_parameters,
        _success_parameters_docs,
        _success_parameters1,
        _warning_parameters,
        _warning_parameters_docs,
        _warning_parameters1,
        _with_Icon_parameters,
        _with_Icon_parameters_docs,
        _with_Icon_parameters1,
        _disable_parameters,
        _disable_parameters_docs,
        _disable_parameters1,
        _loading_parameters,
        _loading_parameters_docs,
        _loading_parameters1,
        _Skeleton_parameters,
        _Skeleton_parameters_docs,
        _Skeleton_parameters1,
        _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        );
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Button",
          component: _Button__WEBPACK_IMPORTED_MODULE_0__.A,
          parameters: { layout: "centered" },
        },
        Primary = {
          args: {
            size: "md",
            disabled: !1,
            label: "Button",
            typeIcon: "",
            variant: "primary",
          },
        },
        secondary = {
          args: {
            size: "md",
            disabled: !1,
            label: "Button",
            typeIcon: "",
            variant: "secondary",
          },
        },
        success = {
          args: {
            size: "md",
            disabled: !1,
            label: "Button",
            typeIcon: "",
            variant: "success",
          },
        },
        warning = {
          args: {
            size: "md",
            disabled: !1,
            label: "Button",
            typeIcon: "",
            variant: "warning",
          },
        },
        with_Icon = {
          args: {
            size: "md",
            disabled: !1,
            label: "Button",
            typeIcon: "ac_unit",
            variant: "primary",
          },
        },
        disable = {
          args: {
            size: "md",
            disabled: !0,
            label: "Button",
            typeIcon: "ac_unit",
            variant: "primary",
          },
        },
        loading = {
          args: { size: "md", label: "Button", variant: "is-loading" },
        },
        Skeleton = {
          args: {
            size: "md",
            label: "Button",
            variant: "primary",
            skeleton: !0,
          },
        };
      (Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...(null === (_Primary_parameters = Primary.parameters) ||
          void 0 === _Primary_parameters
            ? void 0
            : _Primary_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "primary"\n  }\n}',
            ...(null === (_Primary_parameters1 = Primary.parameters) ||
            void 0 === _Primary_parameters1 ||
            null === (_Primary_parameters_docs = _Primary_parameters1.docs) ||
            void 0 === _Primary_parameters_docs
              ? void 0
              : _Primary_parameters_docs.source),
          },
        },
      }),
        (secondary.parameters = {
          ...secondary.parameters,
          docs: {
            ...(null === (_secondary_parameters = secondary.parameters) ||
            void 0 === _secondary_parameters
              ? void 0
              : _secondary_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "secondary"\n  }\n}',
              ...(null === (_secondary_parameters1 = secondary.parameters) ||
              void 0 === _secondary_parameters1 ||
              null ===
                (_secondary_parameters_docs = _secondary_parameters1.docs) ||
              void 0 === _secondary_parameters_docs
                ? void 0
                : _secondary_parameters_docs.source),
            },
          },
        }),
        (success.parameters = {
          ...success.parameters,
          docs: {
            ...(null === (_success_parameters = success.parameters) ||
            void 0 === _success_parameters
              ? void 0
              : _success_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "success"\n  }\n}',
              ...(null === (_success_parameters1 = success.parameters) ||
              void 0 === _success_parameters1 ||
              null === (_success_parameters_docs = _success_parameters1.docs) ||
              void 0 === _success_parameters_docs
                ? void 0
                : _success_parameters_docs.source),
            },
          },
        }),
        (warning.parameters = {
          ...warning.parameters,
          docs: {
            ...(null === (_warning_parameters = warning.parameters) ||
            void 0 === _warning_parameters
              ? void 0
              : _warning_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "",\n    variant: "warning"\n  }\n}',
              ...(null === (_warning_parameters1 = warning.parameters) ||
              void 0 === _warning_parameters1 ||
              null === (_warning_parameters_docs = _warning_parameters1.docs) ||
              void 0 === _warning_parameters_docs
                ? void 0
                : _warning_parameters_docs.source),
            },
          },
        }),
        (with_Icon.parameters = {
          ...with_Icon.parameters,
          docs: {
            ...(null === (_with_Icon_parameters = with_Icon.parameters) ||
            void 0 === _with_Icon_parameters
              ? void 0
              : _with_Icon_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    size: "md",\n    disabled: false,\n    label: "Button",\n    typeIcon: "ac_unit",\n    variant: "primary"\n  }\n}',
              ...(null === (_with_Icon_parameters1 = with_Icon.parameters) ||
              void 0 === _with_Icon_parameters1 ||
              null ===
                (_with_Icon_parameters_docs = _with_Icon_parameters1.docs) ||
              void 0 === _with_Icon_parameters_docs
                ? void 0
                : _with_Icon_parameters_docs.source),
            },
          },
        }),
        (disable.parameters = {
          ...disable.parameters,
          docs: {
            ...(null === (_disable_parameters = disable.parameters) ||
            void 0 === _disable_parameters
              ? void 0
              : _disable_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    size: "md",\n    disabled: true,\n    label: "Button",\n    typeIcon: "ac_unit",\n    variant: "primary"\n  }\n}',
              ...(null === (_disable_parameters1 = disable.parameters) ||
              void 0 === _disable_parameters1 ||
              null === (_disable_parameters_docs = _disable_parameters1.docs) ||
              void 0 === _disable_parameters_docs
                ? void 0
                : _disable_parameters_docs.source),
            },
          },
        }),
        (loading.parameters = {
          ...loading.parameters,
          docs: {
            ...(null === (_loading_parameters = loading.parameters) ||
            void 0 === _loading_parameters
              ? void 0
              : _loading_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    size: "md",\n    label: "Button",\n    variant: "is-loading"\n  }\n}',
              ...(null === (_loading_parameters1 = loading.parameters) ||
              void 0 === _loading_parameters1 ||
              null === (_loading_parameters_docs = _loading_parameters1.docs) ||
              void 0 === _loading_parameters_docs
                ? void 0
                : _loading_parameters_docs.source),
            },
          },
        }),
        (Skeleton.parameters = {
          ...Skeleton.parameters,
          docs: {
            ...(null === (_Skeleton_parameters = Skeleton.parameters) ||
            void 0 === _Skeleton_parameters
              ? void 0
              : _Skeleton_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    size: "md",\n    label: "Button",\n    variant: "primary",\n    skeleton: true\n  }\n}',
              ...(null === (_Skeleton_parameters1 = Skeleton.parameters) ||
              void 0 === _Skeleton_parameters1 ||
              null ===
                (_Skeleton_parameters_docs = _Skeleton_parameters1.docs) ||
              void 0 === _Skeleton_parameters_docs
                ? void 0
                : _Skeleton_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = [
        "Primary",
        "secondary",
        "success",
        "warning",
        "with_Icon",
        "disable",
        "loading",
        "Skeleton",
      ];
    },
  },
]);
