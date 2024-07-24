import Icon from "../Icon/Icon";
import "./Avatar.scss";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";
var Avatar = function (_a) {
    var _b;
    var size = _a.size, src = _a.src, skeleton = _a.skeleton, letter = _a.letter;
    var getSize = function (size) {
        switch (size) {
            case "sm":
                return 24;
            case "md":
                return 40;
            case "lg":
                return 64;
            default:
                return 32;
        }
    };
    var sizeInPixels = getSize(size);
    var getLetter = function (letter) {
        if (letter && letter.includes(" ")) {
            var _a = letter.split(" "), firstName = _a[0], lastName = _a[1];
            return "".concat(firstName.charAt(0)).concat(lastName.charAt(0));
        }
        else if (letter && letter.length > 1) {
            return letter.charAt(0);
        }
        return letter;
    };
    return (<div className="avatar">
      {skeleton ? (<Skeleton height={"".concat(sizeInPixels)} circle={true} width={"".concat(sizeInPixels)}/>) : (<>
          {src ? (<label className="avatar-image">
              <img className={size} src={src} alt="Avatar"/>
            </label>) : (<>
              {letter ? (<label className={"avatar-letter ".concat(size)}>
                  {(_b = getLetter(letter)) === null || _b === void 0 ? void 0 : _b.toLocaleUpperCase()}
                </label>) : (<label className={"avatar-icon ".concat(size)}>
                  <Icon size={size} icon="person"/>
                </label>)}
            </>)}
        </>)}
    </div>);
};
export default Avatar;
