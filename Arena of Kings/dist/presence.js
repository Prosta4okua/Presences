var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var presence = new Presence({
    clientId: "555834227833307146"
});
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
    var presenceData = yield presence.getPageVariable("PreMiD_PresenceData");
    if (presenceData === null)
        presence.setActivity();
    else
        presence.setActivity(presenceData.data);
}));
