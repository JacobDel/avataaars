"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allOptions = exports.Option = exports.AvatarStyle = void 0;
exports.Avatar = Avatar;
exports.Piece = Piece;
var React = require("react");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var piece_1 = require("./avatar/piece");
var avatar_2 = require("./avatar");
Object.defineProperty(exports, "AvatarStyle", { enumerable: true, get: function () { return avatar_2.AvatarStyle; } });
var options_2 = require("./options");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return options_2.Option; } });
Object.defineProperty(exports, "allOptions", { enumerable: true, get: function () { return options_2.allOptions; } });
function Avatar(props) {
    var avatarStyle = props.avatarStyle, style = props.style, className = props.className;
    return (React.createElement(options_1.AvatarContext.Provider, { value: props },
        React.createElement(avatar_1.default, { avatarStyle: avatarStyle, style: style, className: className })));
}
function Piece(props) {
    var avatarStyle = props.avatarStyle, style = props.style, pieceType = props.pieceType;
    return (React.createElement(options_1.AvatarContext.Provider, { value: props },
        React.createElement(piece_1.default, { avatarStyle: avatarStyle, style: style, pieceType: pieceType })));
}
