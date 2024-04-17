(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(':root{--slider-puller-size: 12px;--slider-track-height: 2px;--slider-puller-focus-border-width: 1px;--slider-puller-focus-border-color: #333333;--slider-track-border-radius: 0px;--slider-track-border-width: 0px;--slider-track-border-color: #ccc;--slider-track-inactive-path-color: #D9D9D9;--slider-track-active-path-color: #333333;--slider-puller-background-color: #333333;--slider-puller-shadow: none;--slider-puller-hover-shadow: 0 4px 8px rgba(0, 0, 0, .2);--slider-marks-font-color: #777777;--slider-marks-font-size: 14px;--slider-marks-font-weight: 400;--slider-marks-font-family: Inter;--slider-marks-font-line-height: 20px;--slider-marks-margin-top: 8px;--slider-mark-container-width: 100px}.hs-form{display:flex;flex-direction:column;gap:24px;align-items:stretch}.hs-form,.hs-input{font-family:Inter;font-weight:400;font-size:14px;line-height:20px}.hs-dependent-field{display:flex;flex-direction:row;width:100%}fieldset.form-columns-1{display:flex;flex-direction:row;max-width:none}fieldset.form-columns-2{display:flex;flex-direction:row;column-gap:40px;max-width:none}.hs-form-field{display:flex;flex-direction:column;gap:6px;width:100%}.hs-form-field label{font-weight:500}.input{margin:0!important}.hs-input{border:1px solid #DADADA;padding:15px;border-radius:4px;background-color:#fff;width:100%!important}.hs-input::placeholder{color:#777}.hs-input:focus-visible{outline-width:1px;outline-style:solid;outline-offset:-1px}.hs-input.error{border-color:#dc2636}.hs-form-field:disabled{background-color:#f6f6f6;cursor:not-allowed}.hs-form-field:disabled label{color:#777}.hs-error-msgs{padding:0;margin:0;list-style-type:none}.hs-error-msgs{font-size:10px;line-height:12px;color:#dc2636}.hs-input.hs-fieldtype-textarea{height:141px}.inputs-list.multi-container{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px;list-style-type:none;padding:0;margin:0}.hs-form-checkbox-display{display:block}.hs-form-checkbox-display .hs-input:checked+span{background-color:#333;color:#fff;border-color:#333}.hs-form-checkbox-display span{display:block;cursor:pointer;padding:4px 16px;color:#777;border:1px solid #E6E6E6;border-radius:24px;font-weight:400}.hs-form-checkbox .hs-input{width:0!important;height:0;padding:0;margin:0}.hs_send_me_an_nda .inputs-list,.hs_call_me_asap .inputs-list{padding:0;margin:0;list-style-type:none}.hs-form-booleancheckbox-display{display:flex;flex-direction:row;gap:8px;cursor:pointer;align-items:center}.hs-form-booleancheckbox-display .hs-input{width:24px!important;height:24px!important;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;margin:0;font:inherit;color:currentColor;border:1px solid #777777;border-radius:4px;display:grid;place-content:center;padding:0}.hs-form-booleancheckbox-display .hs-input:before{content:"";width:5px;height:13px;border:solid black;border-width:0 3px 3px 0;transform:rotate(45deg) scale(0);transition:.12s transform ease-in-out;margin-bottom:4px}.hs-form-booleancheckbox-display .hs-input:checked:before{transform:rotate(45deg) scale(1)}.hs-form-booleancheckbox-display span{font-weight:400}.hs_my_budget_is_100_000_or_more input{width:0!important;height:0;margin:0;padding:0;border:none}input[type=submit]{background-color:#00b2a9;height:52px;width:127px;border:none;border-radius:52px;cursor:pointer;font-weight:500;color:#fff;text-transform:capitalize}.actions{display:flex;flex-direction:row;gap:24px;justify-content:flex-end}.file-list{display:flex;flex-direction:column;gap:8px;padding:0;margin:20px 0 0;list-style-type:none;margin-inline-start:20px}.file-container{display:flex;flex-direction:row;gap:8px;align-items:center}.file-image{width:20px;height:20px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDIyIDI2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjMDBCMkE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS40Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTExLjY2NyAwSDIuMzMzQzEuMDQ1IDAgMCAxLjA0NSAwIDIuMzMzVjIxYzAgMS4yODkgMS4wNDUgMi4zMzMgMi4zMzMgMi4zMzNoMTRjMS4yODkgMCAyLjMzNC0xLjA0NCAyLjMzNC0yLjMzM1Y3bC03LTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMSkgdHJhbnNsYXRlKDQuNjY3IDIuMzMzKSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjY3IDBMMTEuNjY3IDcgMTguNjY3IDdNMTQgMTIuODMzTDQuNjY3IDEyLjgzM00xNCAxNy41TDQuNjY3IDE3LjVNNyA4LjE2N0w0LjY2NyA4LjE2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTEpIHRyYW5zbGF0ZSg0LjY2NyAyLjMzMykiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAwSDI4VjI4SDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==);background-size:contain;background-repeat:no-repeat}.slider .label em{color:#00b2a9;text-decoration:none;font-style:normal;margin-inline:4px}stx-slider{--puller-offset: calc((var(--slider-puller-size) - var(--slider-track-height)) / 2);display:flex;flex-direction:column;width:100%;padding-block:var(--puller-offset);cursor:pointer}stx-slider:focus{outline:none}stx-slider:focus .puller{outline-width:var(--slider-puller-focus-border-width);outline-color:var(--slider-puller-focus-border-color);outline-style:solid;outline-offset:1px}stx-slider .track{position:relative;display:flex;flex-direction:row;width:100%;height:var(--slider-track-height);border-radius:var(--slider-track-border-radius);border-width:var(--slider-track-border-width);border-color:var(--slider-track-border-color);background-color:var(--slider-track-inactive-side-color)}stx-slider .track .active-path{background-color:var(--slider-track-active-side-color);border-radius:var(--slider-track-border-radius);border-width:var(--slider-track-border-width);border-color:var(--slider-track-border-color);transition:width .3s ease}stx-slider .puller{position:absolute;width:var(--slider-puller-size);height:var(--slider-puller-size);top:calc(var(--puller-offset) * -1);background-color:var(--slider-puller-background-color);transition:all .3s ease;border-radius:calc(var(--slider-puller-size) / 2);box-shadow:var(--slider-puller-shadow)}stx-slider .puller:hover{box-shadow:var(--slider-puller-hover-shadow)}stx-slider .marks{--mark-container-width: 100px;display:flex;flex-direction:row;justify-content:space-between;width:calc(100% + var(--mark-container-width));color:var(--slider-marks-font-color);font-size:var(--slider-marks-font-size);font-weight:var(--slider-marks-font-weight);font-family:var(--slider-marks-font-family);line-height:var(--slider-marks-font-line-height);margin-top:var(--slider-marks-margin-top);margin-inline:calc(-1 * var(--mark-container-width) / 2)}stx-slider .marks .mark{display:flex;justify-content:center;width:var(--mark-container-width)}stx-slider .marks .mark:first-child{padding-inline-start:calc(var(--mark-container-width) / 2);justify-content:flex-start}stx-slider .marks .mark:last-child{padding-inline-end:calc(var(--mark-container-width) / 2);justify-content:flex-end}stx-slider .label{display:flex;width:100%;margin-bottom:16px;font-weight:500}')),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var qt = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var ue = (r, e, t) => (qt(r, e, "read from private field"), t ? t.call(r) : e.get(r)), K = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, fe = (r, e, t, u) => (qt(r, e, "write to private field"), u ? u.call(r, t) : e.set(r, t), t);
var ae = (r, e, t) => (qt(r, e, "access private method"), t);
function be(r, e, t) {
  const u = document.createElement(r);
  if (e)
    for (const [i, n] of Object.entries(e))
      u.setAttribute(i, n);
  return t && t.appendChild(u), u;
}
var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vi(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function wi(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function u() {
      return this instanceof u ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(u) {
    var i = Object.getOwnPropertyDescriptor(r, u);
    Object.defineProperty(t, u, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[u];
      }
    });
  }), t;
}
var ur = {}, Me = {}, ou = {}, ke = {}, cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
cu.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(r) {
    return r.charCodeAt(0);
  })
);
var lu = {};
Object.defineProperty(lu, "__esModule", { value: !0 });
lu.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(r) {
    return r.charCodeAt(0);
  })
);
var Ft = {};
(function(r) {
  var e;
  Object.defineProperty(r, "__esModule", { value: !0 }), r.replaceCodePoint = r.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  r.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (e = String.fromCodePoint) !== null && e !== void 0 ? e : function(n) {
    var a = "";
    return n > 65535 && (n -= 65536, a += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), a += String.fromCharCode(n), a;
  };
  function u(n) {
    var a;
    return n >= 55296 && n <= 57343 || n > 1114111 ? 65533 : (a = t.get(n)) !== null && a !== void 0 ? a : n;
  }
  r.replaceCodePoint = u;
  function i(n) {
    return (0, r.fromCodePoint)(u(n));
  }
  r.default = i;
})(Ft);
(function(r) {
  var e = O && O.__createBinding || (Object.create ? function(p, v, w, A) {
    A === void 0 && (A = w);
    var d = Object.getOwnPropertyDescriptor(v, w);
    (!d || ("get" in d ? !v.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
      return v[w];
    } }), Object.defineProperty(p, A, d);
  } : function(p, v, w, A) {
    A === void 0 && (A = w), p[A] = v[w];
  }), t = O && O.__setModuleDefault || (Object.create ? function(p, v) {
    Object.defineProperty(p, "default", { enumerable: !0, value: v });
  } : function(p, v) {
    p.default = v;
  }), u = O && O.__importStar || function(p) {
    if (p && p.__esModule)
      return p;
    var v = {};
    if (p != null)
      for (var w in p)
        w !== "default" && Object.prototype.hasOwnProperty.call(p, w) && e(v, p, w);
    return t(v, p), v;
  }, i = O && O.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.decodeXML = r.decodeHTMLStrict = r.decodeHTMLAttribute = r.decodeHTML = r.determineBranch = r.EntityDecoder = r.DecodingMode = r.BinTrieFlags = r.fromCodePoint = r.replaceCodePoint = r.decodeCodePoint = r.xmlDecodeTree = r.htmlDecodeTree = void 0;
  var n = i(cu);
  r.htmlDecodeTree = n.default;
  var a = i(lu);
  r.xmlDecodeTree = a.default;
  var l = u(Ft);
  r.decodeCodePoint = l.default;
  var o = Ft;
  Object.defineProperty(r, "replaceCodePoint", { enumerable: !0, get: function() {
    return o.replaceCodePoint;
  } }), Object.defineProperty(r, "fromCodePoint", { enumerable: !0, get: function() {
    return o.fromCodePoint;
  } });
  var f;
  (function(p) {
    p[p.NUM = 35] = "NUM", p[p.SEMI = 59] = "SEMI", p[p.EQUALS = 61] = "EQUALS", p[p.ZERO = 48] = "ZERO", p[p.NINE = 57] = "NINE", p[p.LOWER_A = 97] = "LOWER_A", p[p.LOWER_F = 102] = "LOWER_F", p[p.LOWER_X = 120] = "LOWER_X", p[p.LOWER_Z = 122] = "LOWER_Z", p[p.UPPER_A = 65] = "UPPER_A", p[p.UPPER_F = 70] = "UPPER_F", p[p.UPPER_Z = 90] = "UPPER_Z";
  })(f || (f = {}));
  var h = 32, y;
  (function(p) {
    p[p.VALUE_LENGTH = 49152] = "VALUE_LENGTH", p[p.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", p[p.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(y = r.BinTrieFlags || (r.BinTrieFlags = {}));
  function s(p) {
    return p >= f.ZERO && p <= f.NINE;
  }
  function c(p) {
    return p >= f.UPPER_A && p <= f.UPPER_F || p >= f.LOWER_A && p <= f.LOWER_F;
  }
  function x(p) {
    return p >= f.UPPER_A && p <= f.UPPER_Z || p >= f.LOWER_A && p <= f.LOWER_Z || s(p);
  }
  function E(p) {
    return p === f.EQUALS || x(p);
  }
  var b;
  (function(p) {
    p[p.EntityStart = 0] = "EntityStart", p[p.NumericStart = 1] = "NumericStart", p[p.NumericDecimal = 2] = "NumericDecimal", p[p.NumericHex = 3] = "NumericHex", p[p.NamedEntity = 4] = "NamedEntity";
  })(b || (b = {}));
  var S;
  (function(p) {
    p[p.Legacy = 0] = "Legacy", p[p.Strict = 1] = "Strict", p[p.Attribute = 2] = "Attribute";
  })(S = r.DecodingMode || (r.DecodingMode = {}));
  var N = (
    /** @class */
    function() {
      function p(v, w, A) {
        this.decodeTree = v, this.emitCodePoint = w, this.errors = A, this.state = b.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = S.Strict;
      }
      return p.prototype.startEntity = function(v) {
        this.decodeMode = v, this.state = b.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, p.prototype.write = function(v, w) {
        switch (this.state) {
          case b.EntityStart:
            return v.charCodeAt(w) === f.NUM ? (this.state = b.NumericStart, this.consumed += 1, this.stateNumericStart(v, w + 1)) : (this.state = b.NamedEntity, this.stateNamedEntity(v, w));
          case b.NumericStart:
            return this.stateNumericStart(v, w);
          case b.NumericDecimal:
            return this.stateNumericDecimal(v, w);
          case b.NumericHex:
            return this.stateNumericHex(v, w);
          case b.NamedEntity:
            return this.stateNamedEntity(v, w);
        }
      }, p.prototype.stateNumericStart = function(v, w) {
        return w >= v.length ? -1 : (v.charCodeAt(w) | h) === f.LOWER_X ? (this.state = b.NumericHex, this.consumed += 1, this.stateNumericHex(v, w + 1)) : (this.state = b.NumericDecimal, this.stateNumericDecimal(v, w));
      }, p.prototype.addToNumericResult = function(v, w, A, d) {
        if (w !== A) {
          var g = A - w;
          this.result = this.result * Math.pow(d, g) + parseInt(v.substr(w, g), d), this.consumed += g;
        }
      }, p.prototype.stateNumericHex = function(v, w) {
        for (var A = w; w < v.length; ) {
          var d = v.charCodeAt(w);
          if (s(d) || c(d))
            w += 1;
          else
            return this.addToNumericResult(v, A, w, 16), this.emitNumericEntity(d, 3);
        }
        return this.addToNumericResult(v, A, w, 16), -1;
      }, p.prototype.stateNumericDecimal = function(v, w) {
        for (var A = w; w < v.length; ) {
          var d = v.charCodeAt(w);
          if (s(d))
            w += 1;
          else
            return this.addToNumericResult(v, A, w, 10), this.emitNumericEntity(d, 2);
        }
        return this.addToNumericResult(v, A, w, 10), -1;
      }, p.prototype.emitNumericEntity = function(v, w) {
        var A;
        if (this.consumed <= w)
          return (A = this.errors) === null || A === void 0 || A.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (v === f.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === S.Strict)
          return 0;
        return this.emitCodePoint((0, l.replaceCodePoint)(this.result), this.consumed), this.errors && (v !== f.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, p.prototype.stateNamedEntity = function(v, w) {
        for (var A = this.decodeTree, d = A[this.treeIndex], g = (d & y.VALUE_LENGTH) >> 14; w < v.length; w++, this.excess++) {
          var m = v.charCodeAt(w);
          if (this.treeIndex = _(A, d, this.treeIndex + Math.max(1, g), m), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === S.Attribute && // We shouldn't have consumed any characters after the entity,
            (g === 0 || // And there should be no invalid characters.
            E(m)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (d = A[this.treeIndex], g = (d & y.VALUE_LENGTH) >> 14, g !== 0) {
            if (m === f.SEMI)
              return this.emitNamedEntityData(this.treeIndex, g, this.consumed + this.excess);
            this.decodeMode !== S.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, p.prototype.emitNotTerminatedNamedEntity = function() {
        var v, w = this, A = w.result, d = w.decodeTree, g = (d[A] & y.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(A, g, this.consumed), (v = this.errors) === null || v === void 0 || v.missingSemicolonAfterCharacterReference(), this.consumed;
      }, p.prototype.emitNamedEntityData = function(v, w, A) {
        var d = this.decodeTree;
        return this.emitCodePoint(w === 1 ? d[v] & ~y.VALUE_LENGTH : d[v + 1], A), w === 3 && this.emitCodePoint(d[v + 2], A), A;
      }, p.prototype.end = function() {
        var v;
        switch (this.state) {
          case b.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== S.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case b.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case b.NumericHex:
            return this.emitNumericEntity(0, 3);
          case b.NumericStart:
            return (v = this.errors) === null || v === void 0 || v.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case b.EntityStart:
            return 0;
        }
      }, p;
    }()
  );
  r.EntityDecoder = N;
  function C(p) {
    var v = "", w = new N(p, function(A) {
      return v += (0, l.fromCodePoint)(A);
    });
    return function(d, g) {
      for (var m = 0, T = 0; (T = d.indexOf("&", T)) >= 0; ) {
        v += d.slice(m, T), w.startEntity(g);
        var U = w.write(
          d,
          // Skip the "&"
          T + 1
        );
        if (U < 0) {
          m = T + w.end();
          break;
        }
        m = T + U, T = U === 0 ? m + 1 : m;
      }
      var B = v + d.slice(m);
      return v = "", B;
    };
  }
  function _(p, v, w, A) {
    var d = (v & y.BRANCH_LENGTH) >> 7, g = v & y.JUMP_TABLE;
    if (d === 0)
      return g !== 0 && A === g ? w : -1;
    if (g) {
      var m = A - g;
      return m < 0 || m >= d ? -1 : p[w + m] - 1;
    }
    for (var T = w, U = T + d - 1; T <= U; ) {
      var B = T + U >>> 1, q = p[B];
      if (q < A)
        T = B + 1;
      else if (q > A)
        U = B - 1;
      else
        return p[B + d];
    }
    return -1;
  }
  r.determineBranch = _;
  var R = C(n.default), F = C(a.default);
  function Y(p, v) {
    return v === void 0 && (v = S.Legacy), R(p, v);
  }
  r.decodeHTML = Y;
  function H(p) {
    return R(p, S.Attribute);
  }
  r.decodeHTMLAttribute = H;
  function z(p) {
    return R(p, S.Strict);
  }
  r.decodeHTMLStrict = z;
  function G(p) {
    return F(p, S.Strict);
  }
  r.decodeXML = G;
})(ke);
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.QuoteType = void 0;
  var e = ke, t;
  (function(s) {
    s[s.Tab = 9] = "Tab", s[s.NewLine = 10] = "NewLine", s[s.FormFeed = 12] = "FormFeed", s[s.CarriageReturn = 13] = "CarriageReturn", s[s.Space = 32] = "Space", s[s.ExclamationMark = 33] = "ExclamationMark", s[s.Number = 35] = "Number", s[s.Amp = 38] = "Amp", s[s.SingleQuote = 39] = "SingleQuote", s[s.DoubleQuote = 34] = "DoubleQuote", s[s.Dash = 45] = "Dash", s[s.Slash = 47] = "Slash", s[s.Zero = 48] = "Zero", s[s.Nine = 57] = "Nine", s[s.Semi = 59] = "Semi", s[s.Lt = 60] = "Lt", s[s.Eq = 61] = "Eq", s[s.Gt = 62] = "Gt", s[s.Questionmark = 63] = "Questionmark", s[s.UpperA = 65] = "UpperA", s[s.LowerA = 97] = "LowerA", s[s.UpperF = 70] = "UpperF", s[s.LowerF = 102] = "LowerF", s[s.UpperZ = 90] = "UpperZ", s[s.LowerZ = 122] = "LowerZ", s[s.LowerX = 120] = "LowerX", s[s.OpeningSquareBracket = 91] = "OpeningSquareBracket";
  })(t || (t = {}));
  var u;
  (function(s) {
    s[s.Text = 1] = "Text", s[s.BeforeTagName = 2] = "BeforeTagName", s[s.InTagName = 3] = "InTagName", s[s.InSelfClosingTag = 4] = "InSelfClosingTag", s[s.BeforeClosingTagName = 5] = "BeforeClosingTagName", s[s.InClosingTagName = 6] = "InClosingTagName", s[s.AfterClosingTagName = 7] = "AfterClosingTagName", s[s.BeforeAttributeName = 8] = "BeforeAttributeName", s[s.InAttributeName = 9] = "InAttributeName", s[s.AfterAttributeName = 10] = "AfterAttributeName", s[s.BeforeAttributeValue = 11] = "BeforeAttributeValue", s[s.InAttributeValueDq = 12] = "InAttributeValueDq", s[s.InAttributeValueSq = 13] = "InAttributeValueSq", s[s.InAttributeValueNq = 14] = "InAttributeValueNq", s[s.BeforeDeclaration = 15] = "BeforeDeclaration", s[s.InDeclaration = 16] = "InDeclaration", s[s.InProcessingInstruction = 17] = "InProcessingInstruction", s[s.BeforeComment = 18] = "BeforeComment", s[s.CDATASequence = 19] = "CDATASequence", s[s.InSpecialComment = 20] = "InSpecialComment", s[s.InCommentLike = 21] = "InCommentLike", s[s.BeforeSpecialS = 22] = "BeforeSpecialS", s[s.SpecialStartSequence = 23] = "SpecialStartSequence", s[s.InSpecialTag = 24] = "InSpecialTag", s[s.BeforeEntity = 25] = "BeforeEntity", s[s.BeforeNumericEntity = 26] = "BeforeNumericEntity", s[s.InNamedEntity = 27] = "InNamedEntity", s[s.InNumericEntity = 28] = "InNumericEntity", s[s.InHexEntity = 29] = "InHexEntity";
  })(u || (u = {}));
  function i(s) {
    return s === t.Space || s === t.NewLine || s === t.Tab || s === t.FormFeed || s === t.CarriageReturn;
  }
  function n(s) {
    return s === t.Slash || s === t.Gt || i(s);
  }
  function a(s) {
    return s >= t.Zero && s <= t.Nine;
  }
  function l(s) {
    return s >= t.LowerA && s <= t.LowerZ || s >= t.UpperA && s <= t.UpperZ;
  }
  function o(s) {
    return s >= t.UpperA && s <= t.UpperF || s >= t.LowerA && s <= t.LowerF;
  }
  var f;
  (function(s) {
    s[s.NoValue = 0] = "NoValue", s[s.Unquoted = 1] = "Unquoted", s[s.Single = 2] = "Single", s[s.Double = 3] = "Double";
  })(f = r.QuoteType || (r.QuoteType = {}));
  var h = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
    // `</title`
  }, y = (
    /** @class */
    function() {
      function s(c, x) {
        var E = c.xmlMode, b = E === void 0 ? !1 : E, S = c.decodeEntities, N = S === void 0 ? !0 : S;
        this.cbs = x, this.state = u.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = u.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = b, this.decodeEntities = N, this.entityTrie = b ? e.xmlDecodeTree : e.htmlDecodeTree;
      }
      return s.prototype.reset = function() {
        this.state = u.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = u.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
      }, s.prototype.write = function(c) {
        this.offset += this.buffer.length, this.buffer = c, this.parse();
      }, s.prototype.end = function() {
        this.running && this.finish();
      }, s.prototype.pause = function() {
        this.running = !1;
      }, s.prototype.resume = function() {
        this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
      }, s.prototype.getIndex = function() {
        return this.index;
      }, s.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, s.prototype.stateText = function(c) {
        c === t.Lt || !this.decodeEntities && this.fastForwardTo(t.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = u.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && c === t.Amp && (this.state = u.BeforeEntity);
      }, s.prototype.stateSpecialStartSequence = function(c) {
        var x = this.sequenceIndex === this.currentSequence.length, E = x ? (
          // If we are at the end of the sequence, make sure the tag name has ended
          n(c)
        ) : (
          // Otherwise, do a case-insensitive comparison
          (c | 32) === this.currentSequence[this.sequenceIndex]
        );
        if (!E)
          this.isSpecial = !1;
        else if (!x) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = u.InTagName, this.stateInTagName(c);
      }, s.prototype.stateInSpecialTag = function(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (c === t.Gt || i(c)) {
            var x = this.index - this.currentSequence.length;
            if (this.sectionStart < x) {
              var E = this.index;
              this.index = x, this.cbs.ontext(this.sectionStart, x), this.index = E;
            }
            this.isSpecial = !1, this.sectionStart = x + 2, this.stateInClosingTagName(c);
            return;
          }
          this.sequenceIndex = 0;
        }
        (c | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === h.TitleEnd ? this.decodeEntities && c === t.Amp && (this.state = u.BeforeEntity) : this.fastForwardTo(t.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(c === t.Lt);
      }, s.prototype.stateCDATASequence = function(c) {
        c === h.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === h.Cdata.length && (this.state = u.InCommentLike, this.currentSequence = h.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = u.InDeclaration, this.stateInDeclaration(c));
      }, s.prototype.fastForwardTo = function(c) {
        for (; ++this.index < this.buffer.length + this.offset; )
          if (this.buffer.charCodeAt(this.index - this.offset) === c)
            return !0;
        return this.index = this.buffer.length + this.offset - 1, !1;
      }, s.prototype.stateInCommentLike = function(c) {
        c === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === h.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = u.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : c !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, s.prototype.isTagStartChar = function(c) {
        return this.xmlMode ? !n(c) : l(c);
      }, s.prototype.startSpecial = function(c, x) {
        this.isSpecial = !0, this.currentSequence = c, this.sequenceIndex = x, this.state = u.SpecialStartSequence;
      }, s.prototype.stateBeforeTagName = function(c) {
        if (c === t.ExclamationMark)
          this.state = u.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (c === t.Questionmark)
          this.state = u.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(c)) {
          var x = c | 32;
          this.sectionStart = this.index, !this.xmlMode && x === h.TitleEnd[2] ? this.startSpecial(h.TitleEnd, 3) : this.state = !this.xmlMode && x === h.ScriptEnd[2] ? u.BeforeSpecialS : u.InTagName;
        } else
          c === t.Slash ? this.state = u.BeforeClosingTagName : (this.state = u.Text, this.stateText(c));
      }, s.prototype.stateInTagName = function(c) {
        n(c) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(c));
      }, s.prototype.stateBeforeClosingTagName = function(c) {
        i(c) || (c === t.Gt ? this.state = u.Text : (this.state = this.isTagStartChar(c) ? u.InClosingTagName : u.InSpecialComment, this.sectionStart = this.index));
      }, s.prototype.stateInClosingTagName = function(c) {
        (c === t.Gt || i(c)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = u.AfterClosingTagName, this.stateAfterClosingTagName(c));
      }, s.prototype.stateAfterClosingTagName = function(c) {
        (c === t.Gt || this.fastForwardTo(t.Gt)) && (this.state = u.Text, this.baseState = u.Text, this.sectionStart = this.index + 1);
      }, s.prototype.stateBeforeAttributeName = function(c) {
        c === t.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = u.InSpecialTag, this.sequenceIndex = 0) : this.state = u.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : c === t.Slash ? this.state = u.InSelfClosingTag : i(c) || (this.state = u.InAttributeName, this.sectionStart = this.index);
      }, s.prototype.stateInSelfClosingTag = function(c) {
        c === t.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = u.Text, this.baseState = u.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : i(c) || (this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(c));
      }, s.prototype.stateInAttributeName = function(c) {
        (c === t.Eq || n(c)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = u.AfterAttributeName, this.stateAfterAttributeName(c));
      }, s.prototype.stateAfterAttributeName = function(c) {
        c === t.Eq ? this.state = u.BeforeAttributeValue : c === t.Slash || c === t.Gt ? (this.cbs.onattribend(f.NoValue, this.index), this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(c)) : i(c) || (this.cbs.onattribend(f.NoValue, this.index), this.state = u.InAttributeName, this.sectionStart = this.index);
      }, s.prototype.stateBeforeAttributeValue = function(c) {
        c === t.DoubleQuote ? (this.state = u.InAttributeValueDq, this.sectionStart = this.index + 1) : c === t.SingleQuote ? (this.state = u.InAttributeValueSq, this.sectionStart = this.index + 1) : i(c) || (this.sectionStart = this.index, this.state = u.InAttributeValueNq, this.stateInAttributeValueNoQuotes(c));
      }, s.prototype.handleInAttributeValue = function(c, x) {
        c === x || !this.decodeEntities && this.fastForwardTo(x) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(x === t.DoubleQuote ? f.Double : f.Single, this.index), this.state = u.BeforeAttributeName) : this.decodeEntities && c === t.Amp && (this.baseState = this.state, this.state = u.BeforeEntity);
      }, s.prototype.stateInAttributeValueDoubleQuotes = function(c) {
        this.handleInAttributeValue(c, t.DoubleQuote);
      }, s.prototype.stateInAttributeValueSingleQuotes = function(c) {
        this.handleInAttributeValue(c, t.SingleQuote);
      }, s.prototype.stateInAttributeValueNoQuotes = function(c) {
        i(c) || c === t.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(f.Unquoted, this.index), this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(c)) : this.decodeEntities && c === t.Amp && (this.baseState = this.state, this.state = u.BeforeEntity);
      }, s.prototype.stateBeforeDeclaration = function(c) {
        c === t.OpeningSquareBracket ? (this.state = u.CDATASequence, this.sequenceIndex = 0) : this.state = c === t.Dash ? u.BeforeComment : u.InDeclaration;
      }, s.prototype.stateInDeclaration = function(c) {
        (c === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = u.Text, this.sectionStart = this.index + 1);
      }, s.prototype.stateInProcessingInstruction = function(c) {
        (c === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = u.Text, this.sectionStart = this.index + 1);
      }, s.prototype.stateBeforeComment = function(c) {
        c === t.Dash ? (this.state = u.InCommentLike, this.currentSequence = h.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = u.InDeclaration;
      }, s.prototype.stateInSpecialComment = function(c) {
        (c === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = u.Text, this.sectionStart = this.index + 1);
      }, s.prototype.stateBeforeSpecialS = function(c) {
        var x = c | 32;
        x === h.ScriptEnd[3] ? this.startSpecial(h.ScriptEnd, 4) : x === h.StyleEnd[3] ? this.startSpecial(h.StyleEnd, 4) : (this.state = u.InTagName, this.stateInTagName(c));
      }, s.prototype.stateBeforeEntity = function(c) {
        this.entityExcess = 1, this.entityResult = 0, c === t.Number ? this.state = u.BeforeNumericEntity : c === t.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = u.InNamedEntity, this.stateInNamedEntity(c));
      }, s.prototype.stateInNamedEntity = function(c) {
        if (this.entityExcess += 1, this.trieIndex = (0, e.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var x = this.trieCurrent & e.BinTrieFlags.VALUE_LENGTH;
        if (x) {
          var E = (x >> 14) - 1;
          if (!this.allowLegacyEntity() && c !== t.Semi)
            this.trieIndex += E;
          else {
            var b = this.index - this.entityExcess + 1;
            b > this.sectionStart && this.emitPartial(this.sectionStart, b), this.entityResult = this.trieIndex, this.trieIndex += E, this.entityExcess = 0, this.sectionStart = this.index + 1, E === 0 && this.emitNamedEntity();
          }
        }
      }, s.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var c = (this.entityTrie[this.entityResult] & e.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (c) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~e.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, s.prototype.stateBeforeNumericEntity = function(c) {
        (c | 32) === t.LowerX ? (this.entityExcess++, this.state = u.InHexEntity) : (this.state = u.InNumericEntity, this.stateInNumericEntity(c));
      }, s.prototype.emitNumericEntity = function(c) {
        var x = this.index - this.entityExcess - 1, E = x + 2 + +(this.state === u.InHexEntity);
        E !== this.index && (x > this.sectionStart && this.emitPartial(this.sectionStart, x), this.sectionStart = this.index + Number(c), this.emitCodePoint((0, e.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, s.prototype.stateInNumericEntity = function(c) {
        c === t.Semi ? this.emitNumericEntity(!0) : a(c) ? (this.entityResult = this.entityResult * 10 + (c - t.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, s.prototype.stateInHexEntity = function(c) {
        c === t.Semi ? this.emitNumericEntity(!0) : a(c) ? (this.entityResult = this.entityResult * 16 + (c - t.Zero), this.entityExcess++) : o(c) ? (this.entityResult = this.entityResult * 16 + ((c | 32) - t.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, s.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === u.Text || this.baseState === u.InSpecialTag);
      }, s.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === u.Text || this.state === u.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === u.InAttributeValueDq || this.state === u.InAttributeValueSq || this.state === u.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, s.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, s.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var c = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case u.Text: {
              this.stateText(c);
              break;
            }
            case u.SpecialStartSequence: {
              this.stateSpecialStartSequence(c);
              break;
            }
            case u.InSpecialTag: {
              this.stateInSpecialTag(c);
              break;
            }
            case u.CDATASequence: {
              this.stateCDATASequence(c);
              break;
            }
            case u.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(c);
              break;
            }
            case u.InAttributeName: {
              this.stateInAttributeName(c);
              break;
            }
            case u.InCommentLike: {
              this.stateInCommentLike(c);
              break;
            }
            case u.InSpecialComment: {
              this.stateInSpecialComment(c);
              break;
            }
            case u.BeforeAttributeName: {
              this.stateBeforeAttributeName(c);
              break;
            }
            case u.InTagName: {
              this.stateInTagName(c);
              break;
            }
            case u.InClosingTagName: {
              this.stateInClosingTagName(c);
              break;
            }
            case u.BeforeTagName: {
              this.stateBeforeTagName(c);
              break;
            }
            case u.AfterAttributeName: {
              this.stateAfterAttributeName(c);
              break;
            }
            case u.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(c);
              break;
            }
            case u.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(c);
              break;
            }
            case u.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(c);
              break;
            }
            case u.AfterClosingTagName: {
              this.stateAfterClosingTagName(c);
              break;
            }
            case u.BeforeSpecialS: {
              this.stateBeforeSpecialS(c);
              break;
            }
            case u.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(c);
              break;
            }
            case u.InSelfClosingTag: {
              this.stateInSelfClosingTag(c);
              break;
            }
            case u.InDeclaration: {
              this.stateInDeclaration(c);
              break;
            }
            case u.BeforeDeclaration: {
              this.stateBeforeDeclaration(c);
              break;
            }
            case u.BeforeComment: {
              this.stateBeforeComment(c);
              break;
            }
            case u.InProcessingInstruction: {
              this.stateInProcessingInstruction(c);
              break;
            }
            case u.InNamedEntity: {
              this.stateInNamedEntity(c);
              break;
            }
            case u.BeforeEntity: {
              this.stateBeforeEntity(c);
              break;
            }
            case u.InHexEntity: {
              this.stateInHexEntity(c);
              break;
            }
            case u.InNumericEntity: {
              this.stateInNumericEntity(c);
              break;
            }
            default:
              this.stateBeforeNumericEntity(c);
          }
          this.index++;
        }
        this.cleanup();
      }, s.prototype.finish = function() {
        this.state === u.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, s.prototype.handleTrailingData = function() {
        var c = this.buffer.length + this.offset;
        this.state === u.InCommentLike ? this.currentSequence === h.CdataEnd ? this.cbs.oncdata(this.sectionStart, c, 0) : this.cbs.oncomment(this.sectionStart, c, 0) : this.state === u.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === u.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === u.InTagName || this.state === u.BeforeAttributeName || this.state === u.BeforeAttributeValue || this.state === u.AfterAttributeName || this.state === u.InAttributeName || this.state === u.InAttributeValueSq || this.state === u.InAttributeValueDq || this.state === u.InAttributeValueNq || this.state === u.InClosingTagName || this.cbs.ontext(this.sectionStart, c);
      }, s.prototype.emitPartial = function(c, x) {
        this.baseState !== u.Text && this.baseState !== u.InSpecialTag ? this.cbs.onattribdata(c, x) : this.cbs.ontext(c, x);
      }, s.prototype.emitCodePoint = function(c) {
        this.baseState !== u.Text && this.baseState !== u.InSpecialTag ? this.cbs.onattribentity(c) : this.cbs.ontextentity(c);
      }, s;
    }()
  );
  r.default = y;
})(ou);
var Si = O && O.__createBinding || (Object.create ? function(r, e, t, u) {
  u === void 0 && (u = t);
  var i = Object.getOwnPropertyDescriptor(e, t);
  (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, u, i);
} : function(r, e, t, u) {
  u === void 0 && (u = t), r[u] = e[t];
}), Ei = O && O.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), Ti = O && O.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && Si(e, r, t);
  return Ei(e, r), e;
};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.Parser = void 0;
var Ye = Ti(ou), Nu = ke, we = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), k = /* @__PURE__ */ new Set(["p"]), _u = /* @__PURE__ */ new Set(["thead", "tbody"]), Iu = /* @__PURE__ */ new Set(["dd", "dt"]), Cu = /* @__PURE__ */ new Set(["rt", "rp"]), Ai = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", k],
  ["h1", k],
  ["h2", k],
  ["h3", k],
  ["h4", k],
  ["h5", k],
  ["h6", k],
  ["select", we],
  ["input", we],
  ["output", we],
  ["button", we],
  ["datalist", we],
  ["textarea", we],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", Iu],
  ["dt", Iu],
  ["address", k],
  ["article", k],
  ["aside", k],
  ["blockquote", k],
  ["details", k],
  ["div", k],
  ["dl", k],
  ["fieldset", k],
  ["figcaption", k],
  ["figure", k],
  ["footer", k],
  ["form", k],
  ["header", k],
  ["hr", k],
  ["main", k],
  ["nav", k],
  ["ol", k],
  ["pre", k],
  ["section", k],
  ["table", k],
  ["ul", k],
  ["rt", Cu],
  ["rp", Cu],
  ["tbody", _u],
  ["tfoot", _u]
]), Oi = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), Du = /* @__PURE__ */ new Set(["math", "svg"]), Pu = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), Ni = /\s|\//, _i = (
  /** @class */
  function() {
    function r(e, t) {
      t === void 0 && (t = {});
      var u, i, n, a, l;
      this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e ?? {}, this.lowerCaseTagNames = (u = t.lowerCaseTags) !== null && u !== void 0 ? u : !t.xmlMode, this.lowerCaseAttributeNames = (i = t.lowerCaseAttributeNames) !== null && i !== void 0 ? i : !t.xmlMode, this.tokenizer = new ((n = t.Tokenizer) !== null && n !== void 0 ? n : Ye.default)(this.options, this), (l = (a = this.cbs).onparserinit) === null || l === void 0 || l.call(a, this);
    }
    return r.prototype.ontext = function(e, t) {
      var u, i, n = this.getSlice(e, t);
      this.endIndex = t - 1, (i = (u = this.cbs).ontext) === null || i === void 0 || i.call(u, n), this.startIndex = t;
    }, r.prototype.ontextentity = function(e) {
      var t, u, i = this.tokenizer.getSectionStart();
      this.endIndex = i - 1, (u = (t = this.cbs).ontext) === null || u === void 0 || u.call(t, (0, Nu.fromCodePoint)(e)), this.startIndex = i;
    }, r.prototype.isVoidElement = function(e) {
      return !this.options.xmlMode && Oi.has(e);
    }, r.prototype.onopentagname = function(e, t) {
      this.endIndex = t;
      var u = this.getSlice(e, t);
      this.lowerCaseTagNames && (u = u.toLowerCase()), this.emitOpenTag(u);
    }, r.prototype.emitOpenTag = function(e) {
      var t, u, i, n;
      this.openTagStart = this.startIndex, this.tagname = e;
      var a = !this.options.xmlMode && Ai.get(e);
      if (a)
        for (; this.stack.length > 0 && a.has(this.stack[this.stack.length - 1]); ) {
          var l = this.stack.pop();
          (u = (t = this.cbs).onclosetag) === null || u === void 0 || u.call(t, l, !0);
        }
      this.isVoidElement(e) || (this.stack.push(e), Du.has(e) ? this.foreignContext.push(!0) : Pu.has(e) && this.foreignContext.push(!1)), (n = (i = this.cbs).onopentagname) === null || n === void 0 || n.call(i, e), this.cbs.onopentag && (this.attribs = {});
    }, r.prototype.endOpenTag = function(e) {
      var t, u;
      this.startIndex = this.openTagStart, this.attribs && ((u = (t = this.cbs).onopentag) === null || u === void 0 || u.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
    }, r.prototype.onopentagend = function(e) {
      this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1;
    }, r.prototype.onclosetag = function(e, t) {
      var u, i, n, a, l, o;
      this.endIndex = t;
      var f = this.getSlice(e, t);
      if (this.lowerCaseTagNames && (f = f.toLowerCase()), (Du.has(f) || Pu.has(f)) && this.foreignContext.pop(), this.isVoidElement(f))
        !this.options.xmlMode && f === "br" && ((i = (u = this.cbs).onopentagname) === null || i === void 0 || i.call(u, "br"), (a = (n = this.cbs).onopentag) === null || a === void 0 || a.call(n, "br", {}, !0), (o = (l = this.cbs).onclosetag) === null || o === void 0 || o.call(l, "br", !1));
      else {
        var h = this.stack.lastIndexOf(f);
        if (h !== -1)
          if (this.cbs.onclosetag)
            for (var y = this.stack.length - h; y--; )
              this.cbs.onclosetag(this.stack.pop(), y !== 0);
          else
            this.stack.length = h;
        else
          !this.options.xmlMode && f === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
      }
      this.startIndex = t + 1;
    }, r.prototype.onselfclosingtag = function(e) {
      this.endIndex = e, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e);
    }, r.prototype.closeCurrentTag = function(e) {
      var t, u, i = this.tagname;
      this.endOpenTag(e), this.stack[this.stack.length - 1] === i && ((u = (t = this.cbs).onclosetag) === null || u === void 0 || u.call(t, i, !e), this.stack.pop());
    }, r.prototype.onattribname = function(e, t) {
      this.startIndex = e;
      var u = this.getSlice(e, t);
      this.attribname = this.lowerCaseAttributeNames ? u.toLowerCase() : u;
    }, r.prototype.onattribdata = function(e, t) {
      this.attribvalue += this.getSlice(e, t);
    }, r.prototype.onattribentity = function(e) {
      this.attribvalue += (0, Nu.fromCodePoint)(e);
    }, r.prototype.onattribend = function(e, t) {
      var u, i;
      this.endIndex = t, (i = (u = this.cbs).onattribute) === null || i === void 0 || i.call(u, this.attribname, this.attribvalue, e === Ye.QuoteType.Double ? '"' : e === Ye.QuoteType.Single ? "'" : e === Ye.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, r.prototype.getInstructionName = function(e) {
      var t = e.search(Ni), u = t < 0 ? e : e.substr(0, t);
      return this.lowerCaseTagNames && (u = u.toLowerCase()), u;
    }, r.prototype.ondeclaration = function(e, t) {
      this.endIndex = t;
      var u = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(u);
        this.cbs.onprocessinginstruction("!".concat(i), "!".concat(u));
      }
      this.startIndex = t + 1;
    }, r.prototype.onprocessinginstruction = function(e, t) {
      this.endIndex = t;
      var u = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(u);
        this.cbs.onprocessinginstruction("?".concat(i), "?".concat(u));
      }
      this.startIndex = t + 1;
    }, r.prototype.oncomment = function(e, t, u) {
      var i, n, a, l;
      this.endIndex = t, (n = (i = this.cbs).oncomment) === null || n === void 0 || n.call(i, this.getSlice(e, t - u)), (l = (a = this.cbs).oncommentend) === null || l === void 0 || l.call(a), this.startIndex = t + 1;
    }, r.prototype.oncdata = function(e, t, u) {
      var i, n, a, l, o, f, h, y, s, c;
      this.endIndex = t;
      var x = this.getSlice(e, t - u);
      this.options.xmlMode || this.options.recognizeCDATA ? ((n = (i = this.cbs).oncdatastart) === null || n === void 0 || n.call(i), (l = (a = this.cbs).ontext) === null || l === void 0 || l.call(a, x), (f = (o = this.cbs).oncdataend) === null || f === void 0 || f.call(o)) : ((y = (h = this.cbs).oncomment) === null || y === void 0 || y.call(h, "[CDATA[".concat(x, "]]")), (c = (s = this.cbs).oncommentend) === null || c === void 0 || c.call(s)), this.startIndex = t + 1;
    }, r.prototype.onend = function() {
      var e, t;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var u = this.stack.length; u > 0; this.cbs.onclosetag(this.stack[--u], !0))
          ;
      }
      (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e);
    }, r.prototype.reset = function() {
      var e, t, u, i;
      (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (i = (u = this.cbs).onparserinit) === null || i === void 0 || i.call(u, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
    }, r.prototype.parseComplete = function(e) {
      this.reset(), this.end(e);
    }, r.prototype.getSlice = function(e, t) {
      for (; e - this.bufferOffset >= this.buffers[0].length; )
        this.shiftBuffer();
      for (var u = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); t - this.bufferOffset > this.buffers[0].length; )
        this.shiftBuffer(), u += this.buffers[0].slice(0, t - this.bufferOffset);
      return u;
    }, r.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, r.prototype.write = function(e) {
      var t, u;
      if (this.ended) {
        (u = (t = this.cbs).onerror) === null || u === void 0 || u.call(t, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++);
    }, r.prototype.end = function(e) {
      var t, u;
      if (this.ended) {
        (u = (t = this.cbs).onerror) === null || u === void 0 || u.call(t, new Error(".end() after done!"));
        return;
      }
      e && this.write(e), this.ended = !0, this.tokenizer.end();
    }, r.prototype.pause = function() {
      this.tokenizer.pause();
    }, r.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, r.prototype.parseChunk = function(e) {
      this.write(e);
    }, r.prototype.done = function(e) {
      this.end(e);
    }, r;
  }()
);
Me.Parser = _i;
var ce = {}, Ie = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Doctype = r.CDATA = r.Tag = r.Style = r.Script = r.Comment = r.Directive = r.Text = r.Root = r.isTag = r.ElementType = void 0;
  var e;
  (function(u) {
    u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype";
  })(e = r.ElementType || (r.ElementType = {}));
  function t(u) {
    return u.type === e.Tag || u.type === e.Script || u.type === e.Style;
  }
  r.isTag = t, r.Root = e.Root, r.Text = e.Text, r.Directive = e.Directive, r.Comment = e.Comment, r.Script = e.Script, r.Style = e.Style, r.Tag = e.Tag, r.CDATA = e.CDATA, r.Doctype = e.Doctype;
})(Ie);
var I = {}, he = O && O.__extends || /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, i) {
      u.__proto__ = i;
    } || function(u, i) {
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (u[n] = i[n]);
    }, r(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    r(e, t);
    function u() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (u.prototype = t.prototype, new u());
  };
}(), Le = O && O.__assign || function() {
  return Le = Object.assign || function(r) {
    for (var e, t = 1, u = arguments.length; t < u; t++) {
      e = arguments[t];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, Le.apply(this, arguments);
};
Object.defineProperty(I, "__esModule", { value: !0 });
I.cloneNode = I.hasChildren = I.isDocument = I.isDirective = I.isComment = I.isText = I.isCDATA = I.isTag = I.Element = I.Document = I.CDATA = I.NodeWithChildren = I.ProcessingInstruction = I.Comment = I.Text = I.DataNode = I.Node = void 0;
var Q = Ie, fu = (
  /** @class */
  function() {
    function r() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(r.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(e) {
        this.parent = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(e) {
        this.prev = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(e) {
        this.next = e;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.cloneNode = function(e) {
      return e === void 0 && (e = !1), du(this, e);
    }, r;
  }()
);
I.Node = fu;
var At = (
  /** @class */
  function(r) {
    he(e, r);
    function e(t) {
      var u = r.call(this) || this;
      return u.data = t, u;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(fu)
);
I.DataNode = At;
var rr = (
  /** @class */
  function(r) {
    he(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.type = Q.ElementType.Text, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(At)
);
I.Text = rr;
var ir = (
  /** @class */
  function(r) {
    he(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.type = Q.ElementType.Comment, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(At)
);
I.Comment = ir;
var nr = (
  /** @class */
  function(r) {
    he(e, r);
    function e(t, u) {
      var i = r.call(this, u) || this;
      return i.name = t, i.type = Q.ElementType.Directive, i;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(At)
);
I.ProcessingInstruction = nr;
var Ot = (
  /** @class */
  function(r) {
    he(e, r);
    function e(t) {
      var u = r.call(this) || this;
      return u.children = t, u;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(fu)
);
I.NodeWithChildren = Ot;
var ar = (
  /** @class */
  function(r) {
    he(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.type = Q.ElementType.CDATA, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ot)
);
I.CDATA = ar;
var sr = (
  /** @class */
  function(r) {
    he(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.type = Q.ElementType.Root, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ot)
);
I.Document = sr;
var or = (
  /** @class */
  function(r) {
    he(e, r);
    function e(t, u, i, n) {
      i === void 0 && (i = []), n === void 0 && (n = t === "script" ? Q.ElementType.Script : t === "style" ? Q.ElementType.Style : Q.ElementType.Tag);
      var a = r.call(this, i) || this;
      return a.name = t, a.attribs = u, a.type = n, a;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(u) {
          var i, n;
          return {
            name: u,
            value: t.attribs[u],
            namespace: (i = t["x-attribsNamespace"]) === null || i === void 0 ? void 0 : i[u],
            prefix: (n = t["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[u]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ot)
);
I.Element = or;
function cr(r) {
  return (0, Q.isTag)(r);
}
I.isTag = cr;
function lr(r) {
  return r.type === Q.ElementType.CDATA;
}
I.isCDATA = lr;
function fr(r) {
  return r.type === Q.ElementType.Text;
}
I.isText = fr;
function dr(r) {
  return r.type === Q.ElementType.Comment;
}
I.isComment = dr;
function hr(r) {
  return r.type === Q.ElementType.Directive;
}
I.isDirective = hr;
function pr(r) {
  return r.type === Q.ElementType.Root;
}
I.isDocument = pr;
function Ii(r) {
  return Object.prototype.hasOwnProperty.call(r, "children");
}
I.hasChildren = Ii;
function du(r, e) {
  e === void 0 && (e = !1);
  var t;
  if (fr(r))
    t = new rr(r.data);
  else if (dr(r))
    t = new ir(r.data);
  else if (cr(r)) {
    var u = e ? jt(r.children) : [], i = new or(r.name, Le({}, r.attribs), u);
    u.forEach(function(o) {
      return o.parent = i;
    }), r.namespace != null && (i.namespace = r.namespace), r["x-attribsNamespace"] && (i["x-attribsNamespace"] = Le({}, r["x-attribsNamespace"])), r["x-attribsPrefix"] && (i["x-attribsPrefix"] = Le({}, r["x-attribsPrefix"])), t = i;
  } else if (lr(r)) {
    var u = e ? jt(r.children) : [], n = new ar(u);
    u.forEach(function(f) {
      return f.parent = n;
    }), t = n;
  } else if (pr(r)) {
    var u = e ? jt(r.children) : [], a = new sr(u);
    u.forEach(function(f) {
      return f.parent = a;
    }), r["x-mode"] && (a["x-mode"] = r["x-mode"]), t = a;
  } else if (hr(r)) {
    var l = new nr(r.name, r.data);
    r["x-name"] != null && (l["x-name"] = r["x-name"], l["x-publicId"] = r["x-publicId"], l["x-systemId"] = r["x-systemId"]), t = l;
  } else
    throw new Error("Not implemented yet: ".concat(r.type));
  return t.startIndex = r.startIndex, t.endIndex = r.endIndex, r.sourceCodeLocation != null && (t.sourceCodeLocation = r.sourceCodeLocation), t;
}
I.cloneNode = du;
function jt(r) {
  for (var e = r.map(function(u) {
    return du(u, !0);
  }), t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t];
  return e;
}
(function(r) {
  var e = O && O.__createBinding || (Object.create ? function(l, o, f, h) {
    h === void 0 && (h = f);
    var y = Object.getOwnPropertyDescriptor(o, f);
    (!y || ("get" in y ? !o.__esModule : y.writable || y.configurable)) && (y = { enumerable: !0, get: function() {
      return o[f];
    } }), Object.defineProperty(l, h, y);
  } : function(l, o, f, h) {
    h === void 0 && (h = f), l[h] = o[f];
  }), t = O && O.__exportStar || function(l, o) {
    for (var f in l)
      f !== "default" && !Object.prototype.hasOwnProperty.call(o, f) && e(o, l, f);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.DomHandler = void 0;
  var u = Ie, i = I;
  t(I, r);
  var n = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, a = (
    /** @class */
    function() {
      function l(o, f, h) {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof f == "function" && (h = f, f = n), typeof o == "object" && (f = o, o = void 0), this.callback = o ?? null, this.options = f ?? n, this.elementCB = h ?? null;
      }
      return l.prototype.onparserinit = function(o) {
        this.parser = o;
      }, l.prototype.onreset = function() {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, l.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, l.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, l.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, l.prototype.onopentag = function(o, f) {
        var h = this.options.xmlMode ? u.ElementType.Tag : void 0, y = new i.Element(o, f, void 0, h);
        this.addNode(y), this.tagStack.push(y);
      }, l.prototype.ontext = function(o) {
        var f = this.lastNode;
        if (f && f.type === u.ElementType.Text)
          f.data += o, this.options.withEndIndices && (f.endIndex = this.parser.endIndex);
        else {
          var h = new i.Text(o);
          this.addNode(h), this.lastNode = h;
        }
      }, l.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === u.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var f = new i.Comment(o);
        this.addNode(f), this.lastNode = f;
      }, l.prototype.oncommentend = function() {
        this.lastNode = null;
      }, l.prototype.oncdatastart = function() {
        var o = new i.Text(""), f = new i.CDATA([o]);
        this.addNode(f), o.parent = f, this.lastNode = o;
      }, l.prototype.oncdataend = function() {
        this.lastNode = null;
      }, l.prototype.onprocessinginstruction = function(o, f) {
        var h = new i.ProcessingInstruction(o, f);
        this.addNode(h);
      }, l.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, l.prototype.addNode = function(o) {
        var f = this.tagStack[this.tagStack.length - 1], h = f.children[f.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), f.children.push(o), h && (o.prev = h, h.next = o), o.parent = f, this.lastNode = null;
      }, l;
    }()
  );
  r.DomHandler = a, r.default = a;
})(ce);
var ct = {}, J = {}, We = {}, br = {}, xe = {}, hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
function Ke(r) {
  for (var e = 1; e < r.length; e++)
    r[e][0] += r[e - 1][0] + 1;
  return r;
}
hu.default = new Map(/* @__PURE__ */ Ke([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ Ke([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ Ke([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ Ke([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var pt = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.escapeText = r.escapeAttribute = r.escapeUTF8 = r.escape = r.encodeXML = r.getCodePoint = r.xmlReplacer = void 0, r.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var e = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  r.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(i, n) {
    return i.codePointAt(n);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(i, n) {
      return (i.charCodeAt(n) & 64512) === 55296 ? (i.charCodeAt(n) - 55296) * 1024 + i.charCodeAt(n + 1) - 56320 + 65536 : i.charCodeAt(n);
    }
  );
  function t(i) {
    for (var n = "", a = 0, l; (l = r.xmlReplacer.exec(i)) !== null; ) {
      var o = l.index, f = i.charCodeAt(o), h = e.get(f);
      h !== void 0 ? (n += i.substring(a, o) + h, a = o + 1) : (n += "".concat(i.substring(a, o), "&#x").concat((0, r.getCodePoint)(i, o).toString(16), ";"), a = r.xmlReplacer.lastIndex += +((f & 64512) === 55296));
    }
    return n + i.substr(a);
  }
  r.encodeXML = t, r.escape = t;
  function u(i, n) {
    return function(l) {
      for (var o, f = 0, h = ""; o = i.exec(l); )
        f !== o.index && (h += l.substring(f, o.index)), h += n.get(o[0].charCodeAt(0)), f = o.index + 1;
      return h + l.substring(f);
    };
  }
  r.escapeUTF8 = u(/[&<>'"]/g, e), r.escapeAttribute = u(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), r.escapeText = u(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(pt);
var Ci = O && O.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.encodeNonAsciiHTML = xe.encodeHTML = void 0;
var Di = Ci(hu), mr = pt, Pi = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function Li(r) {
  return gr(Pi, r);
}
xe.encodeHTML = Li;
function Mi(r) {
  return gr(mr.xmlReplacer, r);
}
xe.encodeNonAsciiHTML = Mi;
function gr(r, e) {
  for (var t = "", u = 0, i; (i = r.exec(e)) !== null; ) {
    var n = i.index;
    t += e.substring(u, n);
    var a = e.charCodeAt(n), l = Di.default.get(a);
    if (typeof l == "object") {
      if (n + 1 < e.length) {
        var o = e.charCodeAt(n + 1), f = typeof l.n == "number" ? l.n === o ? l.o : void 0 : l.n.get(o);
        if (f !== void 0) {
          t += f, u = r.lastIndex += 1;
          continue;
        }
      }
      l = l.v;
    }
    if (l !== void 0)
      t += l, u = n + 1;
    else {
      var h = (0, mr.getCodePoint)(e, n);
      t += "&#x".concat(h.toString(16), ";"), u = r.lastIndex += +(h !== a);
    }
  }
  return t + e.substr(u);
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.decodeXMLStrict = r.decodeHTML5Strict = r.decodeHTML4Strict = r.decodeHTML5 = r.decodeHTML4 = r.decodeHTMLAttribute = r.decodeHTMLStrict = r.decodeHTML = r.decodeXML = r.DecodingMode = r.EntityDecoder = r.encodeHTML5 = r.encodeHTML4 = r.encodeNonAsciiHTML = r.encodeHTML = r.escapeText = r.escapeAttribute = r.escapeUTF8 = r.escape = r.encodeXML = r.encode = r.decodeStrict = r.decode = r.EncodingMode = r.EntityLevel = void 0;
  var e = ke, t = xe, u = pt, i;
  (function(s) {
    s[s.XML = 0] = "XML", s[s.HTML = 1] = "HTML";
  })(i = r.EntityLevel || (r.EntityLevel = {}));
  var n;
  (function(s) {
    s[s.UTF8 = 0] = "UTF8", s[s.ASCII = 1] = "ASCII", s[s.Extensive = 2] = "Extensive", s[s.Attribute = 3] = "Attribute", s[s.Text = 4] = "Text";
  })(n = r.EncodingMode || (r.EncodingMode = {}));
  function a(s, c) {
    c === void 0 && (c = i.XML);
    var x = typeof c == "number" ? c : c.level;
    if (x === i.HTML) {
      var E = typeof c == "object" ? c.mode : void 0;
      return (0, e.decodeHTML)(s, E);
    }
    return (0, e.decodeXML)(s);
  }
  r.decode = a;
  function l(s, c) {
    var x;
    c === void 0 && (c = i.XML);
    var E = typeof c == "number" ? { level: c } : c;
    return (x = E.mode) !== null && x !== void 0 || (E.mode = e.DecodingMode.Strict), a(s, E);
  }
  r.decodeStrict = l;
  function o(s, c) {
    c === void 0 && (c = i.XML);
    var x = typeof c == "number" ? { level: c } : c;
    return x.mode === n.UTF8 ? (0, u.escapeUTF8)(s) : x.mode === n.Attribute ? (0, u.escapeAttribute)(s) : x.mode === n.Text ? (0, u.escapeText)(s) : x.level === i.HTML ? x.mode === n.ASCII ? (0, t.encodeNonAsciiHTML)(s) : (0, t.encodeHTML)(s) : (0, u.encodeXML)(s);
  }
  r.encode = o;
  var f = pt;
  Object.defineProperty(r, "encodeXML", { enumerable: !0, get: function() {
    return f.encodeXML;
  } }), Object.defineProperty(r, "escape", { enumerable: !0, get: function() {
    return f.escape;
  } }), Object.defineProperty(r, "escapeUTF8", { enumerable: !0, get: function() {
    return f.escapeUTF8;
  } }), Object.defineProperty(r, "escapeAttribute", { enumerable: !0, get: function() {
    return f.escapeAttribute;
  } }), Object.defineProperty(r, "escapeText", { enumerable: !0, get: function() {
    return f.escapeText;
  } });
  var h = xe;
  Object.defineProperty(r, "encodeHTML", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } }), Object.defineProperty(r, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return h.encodeNonAsciiHTML;
  } }), Object.defineProperty(r, "encodeHTML4", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } }), Object.defineProperty(r, "encodeHTML5", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } });
  var y = ke;
  Object.defineProperty(r, "EntityDecoder", { enumerable: !0, get: function() {
    return y.EntityDecoder;
  } }), Object.defineProperty(r, "DecodingMode", { enumerable: !0, get: function() {
    return y.DecodingMode;
  } }), Object.defineProperty(r, "decodeXML", { enumerable: !0, get: function() {
    return y.decodeXML;
  } }), Object.defineProperty(r, "decodeHTML", { enumerable: !0, get: function() {
    return y.decodeHTML;
  } }), Object.defineProperty(r, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return y.decodeHTMLStrict;
  } }), Object.defineProperty(r, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return y.decodeHTMLAttribute;
  } }), Object.defineProperty(r, "decodeHTML4", { enumerable: !0, get: function() {
    return y.decodeHTML;
  } }), Object.defineProperty(r, "decodeHTML5", { enumerable: !0, get: function() {
    return y.decodeHTML;
  } }), Object.defineProperty(r, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return y.decodeHTMLStrict;
  } }), Object.defineProperty(r, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return y.decodeHTMLStrict;
  } }), Object.defineProperty(r, "decodeXMLStrict", { enumerable: !0, get: function() {
    return y.decodeXML;
  } });
})(br);
var Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
Te.attributeNames = Te.elementNames = void 0;
Te.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(r) {
  return [r.toLowerCase(), r];
}));
Te.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(r) {
  return [r.toLowerCase(), r];
}));
var Se = O && O.__assign || function() {
  return Se = Object.assign || function(r) {
    for (var e, t = 1, u = arguments.length; t < u; t++) {
      e = arguments[t];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, Se.apply(this, arguments);
}, ki = O && O.__createBinding || (Object.create ? function(r, e, t, u) {
  u === void 0 && (u = t);
  var i = Object.getOwnPropertyDescriptor(e, t);
  (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(r, u, i);
} : function(r, e, t, u) {
  u === void 0 && (u = t), r[u] = e[t];
}), Ri = O && O.__setModuleDefault || (Object.create ? function(r, e) {
  Object.defineProperty(r, "default", { enumerable: !0, value: e });
} : function(r, e) {
  r.default = e;
}), qi = O && O.__importStar || function(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && ki(e, r, t);
  return Ri(e, r), e;
};
Object.defineProperty(We, "__esModule", { value: !0 });
We.render = void 0;
var se = qi(Ie), bt = br, yr = Te, ji = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function Bi(r) {
  return r.replace(/"/g, "&quot;");
}
function Ui(r, e) {
  var t;
  if (r) {
    var u = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? Bi : e.xmlMode || e.encodeEntities !== "utf8" ? bt.encodeXML : bt.escapeAttribute;
    return Object.keys(r).map(function(i) {
      var n, a, l = (n = r[i]) !== null && n !== void 0 ? n : "";
      return e.xmlMode === "foreign" && (i = (a = yr.attributeNames.get(i)) !== null && a !== void 0 ? a : i), !e.emptyAttrs && !e.xmlMode && l === "" ? i : "".concat(i, '="').concat(u(l), '"');
    }).join(" ");
  }
}
var Lu = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function Nt(r, e) {
  e === void 0 && (e = {});
  for (var t = ("length" in r) ? r : [r], u = "", i = 0; i < t.length; i++)
    u += Hi(t[i], e);
  return u;
}
We.render = Nt;
We.default = Nt;
function Hi(r, e) {
  switch (r.type) {
    case se.Root:
      return Nt(r.children, e);
    case se.Doctype:
    case se.Directive:
      return zi(r);
    case se.Comment:
      return Xi(r);
    case se.CDATA:
      return Wi(r);
    case se.Script:
    case se.Style:
    case se.Tag:
      return Vi(r, e);
    case se.Text:
      return Gi(r, e);
  }
}
var $i = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), Fi = /* @__PURE__ */ new Set(["svg", "math"]);
function Vi(r, e) {
  var t;
  e.xmlMode === "foreign" && (r.name = (t = yr.elementNames.get(r.name)) !== null && t !== void 0 ? t : r.name, r.parent && $i.has(r.parent.name) && (e = Se(Se({}, e), { xmlMode: !1 }))), !e.xmlMode && Fi.has(r.name) && (e = Se(Se({}, e), { xmlMode: "foreign" }));
  var u = "<".concat(r.name), i = Ui(r.attribs, e);
  return i && (u += " ".concat(i)), r.children.length === 0 && (e.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    e.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    e.selfClosingTags && Lu.has(r.name)
  )) ? (e.xmlMode || (u += " "), u += "/>") : (u += ">", r.children.length > 0 && (u += Nt(r.children, e)), (e.xmlMode || !Lu.has(r.name)) && (u += "</".concat(r.name, ">"))), u;
}
function zi(r) {
  return "<".concat(r.data, ">");
}
function Gi(r, e) {
  var t, u = r.data || "";
  return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && r.parent && ji.has(r.parent.name)) && (u = e.xmlMode || e.encodeEntities !== "utf8" ? (0, bt.encodeXML)(u) : (0, bt.escapeText)(u)), u;
}
function Wi(r) {
  return "<![CDATA[".concat(r.children[0].data, "]]>");
}
function Xi(r) {
  return "<!--".concat(r.data, "-->");
}
var Qi = O && O.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(J, "__esModule", { value: !0 });
J.innerText = J.textContent = J.getText = J.getInnerHTML = J.getOuterHTML = void 0;
var ie = ce, Ji = Qi(We), Zi = Ie;
function xr(r, e) {
  return (0, Ji.default)(r, e);
}
J.getOuterHTML = xr;
function Yi(r, e) {
  return (0, ie.hasChildren)(r) ? r.children.map(function(t) {
    return xr(t, e);
  }).join("") : "";
}
J.getInnerHTML = Yi;
function lt(r) {
  return Array.isArray(r) ? r.map(lt).join("") : (0, ie.isTag)(r) ? r.name === "br" ? `
` : lt(r.children) : (0, ie.isCDATA)(r) ? lt(r.children) : (0, ie.isText)(r) ? r.data : "";
}
J.getText = lt;
function Vt(r) {
  return Array.isArray(r) ? r.map(Vt).join("") : (0, ie.hasChildren)(r) && !(0, ie.isComment)(r) ? Vt(r.children) : (0, ie.isText)(r) ? r.data : "";
}
J.textContent = Vt;
function zt(r) {
  return Array.isArray(r) ? r.map(zt).join("") : (0, ie.hasChildren)(r) && (r.type === Zi.ElementType.Tag || (0, ie.isCDATA)(r)) ? zt(r.children) : (0, ie.isText)(r) ? r.data : "";
}
J.innerText = zt;
var $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.prevElementSibling = $.nextElementSibling = $.getName = $.hasAttrib = $.getAttributeValue = $.getSiblings = $.getParent = $.getChildren = void 0;
var pu = ce;
function vr(r) {
  return (0, pu.hasChildren)(r) ? r.children : [];
}
$.getChildren = vr;
function wr(r) {
  return r.parent || null;
}
$.getParent = wr;
function Ki(r) {
  var e, t, u = wr(r);
  if (u != null)
    return vr(u);
  for (var i = [r], n = r.prev, a = r.next; n != null; )
    i.unshift(n), e = n, n = e.prev;
  for (; a != null; )
    i.push(a), t = a, a = t.next;
  return i;
}
$.getSiblings = Ki;
function en(r, e) {
  var t;
  return (t = r.attribs) === null || t === void 0 ? void 0 : t[e];
}
$.getAttributeValue = en;
function tn(r, e) {
  return r.attribs != null && Object.prototype.hasOwnProperty.call(r.attribs, e) && r.attribs[e] != null;
}
$.hasAttrib = tn;
function un(r) {
  return r.name;
}
$.getName = un;
function rn(r) {
  for (var e, t = r.next; t !== null && !(0, pu.isTag)(t); )
    e = t, t = e.next;
  return t;
}
$.nextElementSibling = rn;
function nn(r) {
  for (var e, t = r.prev; t !== null && !(0, pu.isTag)(t); )
    e = t, t = e.prev;
  return t;
}
$.prevElementSibling = nn;
var X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.prepend = X.prependChild = X.append = X.appendChild = X.replaceElement = X.removeElement = void 0;
function Xe(r) {
  if (r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev), r.parent) {
    var e = r.parent.children, t = e.lastIndexOf(r);
    t >= 0 && e.splice(t, 1);
  }
  r.next = null, r.prev = null, r.parent = null;
}
X.removeElement = Xe;
function an(r, e) {
  var t = e.prev = r.prev;
  t && (t.next = e);
  var u = e.next = r.next;
  u && (u.prev = e);
  var i = e.parent = r.parent;
  if (i) {
    var n = i.children;
    n[n.lastIndexOf(r)] = e, r.parent = null;
  }
}
X.replaceElement = an;
function sn(r, e) {
  if (Xe(e), e.next = null, e.parent = r, r.children.push(e) > 1) {
    var t = r.children[r.children.length - 2];
    t.next = e, e.prev = t;
  } else
    e.prev = null;
}
X.appendChild = sn;
function on(r, e) {
  Xe(e);
  var t = r.parent, u = r.next;
  if (e.next = u, e.prev = r, r.next = e, e.parent = t, u) {
    if (u.prev = e, t) {
      var i = t.children;
      i.splice(i.lastIndexOf(u), 0, e);
    }
  } else
    t && t.children.push(e);
}
X.append = on;
function cn(r, e) {
  if (Xe(e), e.parent = r, e.prev = null, r.children.unshift(e) !== 1) {
    var t = r.children[1];
    t.prev = e, e.next = t;
  } else
    e.next = null;
}
X.prependChild = cn;
function ln(r, e) {
  Xe(e);
  var t = r.parent;
  if (t) {
    var u = t.children;
    u.splice(u.indexOf(r), 0, e);
  }
  r.prev && (r.prev.next = e), e.parent = t, e.prev = r.prev, e.next = r, r.prev = e;
}
X.prepend = ln;
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.findAll = V.existsOne = V.findOne = V.findOneChild = V.find = V.filter = void 0;
var _t = ce;
function fn(r, e, t, u) {
  return t === void 0 && (t = !0), u === void 0 && (u = 1 / 0), Sr(r, Array.isArray(e) ? e : [e], t, u);
}
V.filter = fn;
function Sr(r, e, t, u) {
  for (var i = [], n = [e], a = [0]; ; ) {
    if (a[0] >= n[0].length) {
      if (a.length === 1)
        return i;
      n.shift(), a.shift();
      continue;
    }
    var l = n[0][a[0]++];
    if (r(l) && (i.push(l), --u <= 0))
      return i;
    t && (0, _t.hasChildren)(l) && l.children.length > 0 && (a.unshift(0), n.unshift(l.children));
  }
}
V.find = Sr;
function dn(r, e) {
  return e.find(r);
}
V.findOneChild = dn;
function Er(r, e, t) {
  t === void 0 && (t = !0);
  for (var u = null, i = 0; i < e.length && !u; i++) {
    var n = e[i];
    if ((0, _t.isTag)(n))
      r(n) ? u = n : t && n.children.length > 0 && (u = Er(r, n.children, !0));
    else
      continue;
  }
  return u;
}
V.findOne = Er;
function Tr(r, e) {
  return e.some(function(t) {
    return (0, _t.isTag)(t) && (r(t) || Tr(r, t.children));
  });
}
V.existsOne = Tr;
function hn(r, e) {
  for (var t = [], u = [e], i = [0]; ; ) {
    if (i[0] >= u[0].length) {
      if (u.length === 1)
        return t;
      u.shift(), i.shift();
      continue;
    }
    var n = u[0][i[0]++];
    (0, _t.isTag)(n) && (r(n) && t.push(n), n.children.length > 0 && (i.unshift(0), u.unshift(n.children)));
  }
}
V.findAll = hn;
var Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.getElementsByTagType = Z.getElementsByTagName = Z.getElementById = Z.getElements = Z.testElement = void 0;
var me = ce, It = V, mt = {
  tag_name: function(r) {
    return typeof r == "function" ? function(e) {
      return (0, me.isTag)(e) && r(e.name);
    } : r === "*" ? me.isTag : function(e) {
      return (0, me.isTag)(e) && e.name === r;
    };
  },
  tag_type: function(r) {
    return typeof r == "function" ? function(e) {
      return r(e.type);
    } : function(e) {
      return e.type === r;
    };
  },
  tag_contains: function(r) {
    return typeof r == "function" ? function(e) {
      return (0, me.isText)(e) && r(e.data);
    } : function(e) {
      return (0, me.isText)(e) && e.data === r;
    };
  }
};
function Ar(r, e) {
  return typeof e == "function" ? function(t) {
    return (0, me.isTag)(t) && e(t.attribs[r]);
  } : function(t) {
    return (0, me.isTag)(t) && t.attribs[r] === e;
  };
}
function pn(r, e) {
  return function(t) {
    return r(t) || e(t);
  };
}
function Or(r) {
  var e = Object.keys(r).map(function(t) {
    var u = r[t];
    return Object.prototype.hasOwnProperty.call(mt, t) ? mt[t](u) : Ar(t, u);
  });
  return e.length === 0 ? null : e.reduce(pn);
}
function bn(r, e) {
  var t = Or(r);
  return t ? t(e) : !0;
}
Z.testElement = bn;
function mn(r, e, t, u) {
  u === void 0 && (u = 1 / 0);
  var i = Or(r);
  return i ? (0, It.filter)(i, e, t, u) : [];
}
Z.getElements = mn;
function gn(r, e, t) {
  return t === void 0 && (t = !0), Array.isArray(e) || (e = [e]), (0, It.findOne)(Ar("id", r), e, t);
}
Z.getElementById = gn;
function yn(r, e, t, u) {
  return t === void 0 && (t = !0), u === void 0 && (u = 1 / 0), (0, It.filter)(mt.tag_name(r), e, t, u);
}
Z.getElementsByTagName = yn;
function xn(r, e, t, u) {
  return t === void 0 && (t = !0), u === void 0 && (u = 1 / 0), (0, It.filter)(mt.tag_type(r), e, t, u);
}
Z.getElementsByTagType = xn;
var Nr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.uniqueSort = r.compareDocumentPosition = r.DocumentPosition = r.removeSubsets = void 0;
  var e = ce;
  function t(a) {
    for (var l = a.length; --l >= 0; ) {
      var o = a[l];
      if (l > 0 && a.lastIndexOf(o, l - 1) >= 0) {
        a.splice(l, 1);
        continue;
      }
      for (var f = o.parent; f; f = f.parent)
        if (a.includes(f)) {
          a.splice(l, 1);
          break;
        }
    }
    return a;
  }
  r.removeSubsets = t;
  var u;
  (function(a) {
    a[a.DISCONNECTED = 1] = "DISCONNECTED", a[a.PRECEDING = 2] = "PRECEDING", a[a.FOLLOWING = 4] = "FOLLOWING", a[a.CONTAINS = 8] = "CONTAINS", a[a.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(u = r.DocumentPosition || (r.DocumentPosition = {}));
  function i(a, l) {
    var o = [], f = [];
    if (a === l)
      return 0;
    for (var h = (0, e.hasChildren)(a) ? a : a.parent; h; )
      o.unshift(h), h = h.parent;
    for (h = (0, e.hasChildren)(l) ? l : l.parent; h; )
      f.unshift(h), h = h.parent;
    for (var y = Math.min(o.length, f.length), s = 0; s < y && o[s] === f[s]; )
      s++;
    if (s === 0)
      return u.DISCONNECTED;
    var c = o[s - 1], x = c.children, E = o[s], b = f[s];
    return x.indexOf(E) > x.indexOf(b) ? c === l ? u.FOLLOWING | u.CONTAINED_BY : u.FOLLOWING : c === a ? u.PRECEDING | u.CONTAINS : u.PRECEDING;
  }
  r.compareDocumentPosition = i;
  function n(a) {
    return a = a.filter(function(l, o, f) {
      return !f.includes(l, o + 1);
    }), a.sort(function(l, o) {
      var f = i(l, o);
      return f & u.PRECEDING ? -1 : f & u.FOLLOWING ? 1 : 0;
    }), a;
  }
  r.uniqueSort = n;
})(Nr);
var Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.getFeed = void 0;
var vn = J, Qe = Z;
function wn(r) {
  var e = gt(On, r);
  return e ? e.name === "feed" ? Sn(e) : En(e) : null;
}
Ct.getFeed = wn;
function Sn(r) {
  var e, t = r.children, u = {
    type: "atom",
    items: (0, Qe.getElementsByTagName)("entry", t).map(function(a) {
      var l, o = a.children, f = { media: _r(o) };
      W(f, "id", "id", o), W(f, "title", "title", o);
      var h = (l = gt("link", o)) === null || l === void 0 ? void 0 : l.attribs.href;
      h && (f.link = h);
      var y = de("summary", o) || de("content", o);
      y && (f.description = y);
      var s = de("updated", o);
      return s && (f.pubDate = new Date(s)), f;
    })
  };
  W(u, "id", "id", t), W(u, "title", "title", t);
  var i = (e = gt("link", t)) === null || e === void 0 ? void 0 : e.attribs.href;
  i && (u.link = i), W(u, "description", "subtitle", t);
  var n = de("updated", t);
  return n && (u.updated = new Date(n)), W(u, "author", "email", t, !0), u;
}
function En(r) {
  var e, t, u = (t = (e = gt("channel", r.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], i = {
    type: r.name.substr(0, 3),
    id: "",
    items: (0, Qe.getElementsByTagName)("item", r.children).map(function(a) {
      var l = a.children, o = { media: _r(l) };
      W(o, "id", "guid", l), W(o, "title", "title", l), W(o, "link", "link", l), W(o, "description", "description", l);
      var f = de("pubDate", l) || de("dc:date", l);
      return f && (o.pubDate = new Date(f)), o;
    })
  };
  W(i, "title", "title", u), W(i, "link", "link", u), W(i, "description", "description", u);
  var n = de("lastBuildDate", u);
  return n && (i.updated = new Date(n)), W(i, "author", "managingEditor", u, !0), i;
}
var Tn = ["url", "type", "lang"], An = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function _r(r) {
  return (0, Qe.getElementsByTagName)("media:content", r).map(function(e) {
    for (var t = e.attribs, u = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, i = 0, n = Tn; i < n.length; i++) {
      var a = n[i];
      t[a] && (u[a] = t[a]);
    }
    for (var l = 0, o = An; l < o.length; l++) {
      var a = o[l];
      t[a] && (u[a] = parseInt(t[a], 10));
    }
    return t.expression && (u.expression = t.expression), u;
  });
}
function gt(r, e) {
  return (0, Qe.getElementsByTagName)(r, e, !0, 1)[0];
}
function de(r, e, t) {
  return t === void 0 && (t = !1), (0, vn.textContent)((0, Qe.getElementsByTagName)(r, e, t, 1)).trim();
}
function W(r, e, t, u, i) {
  i === void 0 && (i = !1);
  var n = de(t, u, i);
  n && (r[e] = n);
}
function On(r) {
  return r === "rss" || r === "feed" || r === "rdf:RDF";
}
(function(r) {
  var e = O && O.__createBinding || (Object.create ? function(i, n, a, l) {
    l === void 0 && (l = a);
    var o = Object.getOwnPropertyDescriptor(n, a);
    (!o || ("get" in o ? !n.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return n[a];
    } }), Object.defineProperty(i, l, o);
  } : function(i, n, a, l) {
    l === void 0 && (l = a), i[l] = n[a];
  }), t = O && O.__exportStar || function(i, n) {
    for (var a in i)
      a !== "default" && !Object.prototype.hasOwnProperty.call(n, a) && e(n, i, a);
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.hasChildren = r.isDocument = r.isComment = r.isText = r.isCDATA = r.isTag = void 0, t(J, r), t($, r), t(X, r), t(V, r), t(Z, r), t(Nr, r), t(Ct, r);
  var u = ce;
  Object.defineProperty(r, "isTag", { enumerable: !0, get: function() {
    return u.isTag;
  } }), Object.defineProperty(r, "isCDATA", { enumerable: !0, get: function() {
    return u.isCDATA;
  } }), Object.defineProperty(r, "isText", { enumerable: !0, get: function() {
    return u.isText;
  } }), Object.defineProperty(r, "isComment", { enumerable: !0, get: function() {
    return u.isComment;
  } }), Object.defineProperty(r, "isDocument", { enumerable: !0, get: function() {
    return u.isDocument;
  } }), Object.defineProperty(r, "hasChildren", { enumerable: !0, get: function() {
    return u.hasChildren;
  } });
})(ct);
(function(r) {
  var e = O && O.__createBinding || (Object.create ? function(S, N, C, _) {
    _ === void 0 && (_ = C);
    var R = Object.getOwnPropertyDescriptor(N, C);
    (!R || ("get" in R ? !N.__esModule : R.writable || R.configurable)) && (R = { enumerable: !0, get: function() {
      return N[C];
    } }), Object.defineProperty(S, _, R);
  } : function(S, N, C, _) {
    _ === void 0 && (_ = C), S[_] = N[C];
  }), t = O && O.__setModuleDefault || (Object.create ? function(S, N) {
    Object.defineProperty(S, "default", { enumerable: !0, value: N });
  } : function(S, N) {
    S.default = N;
  }), u = O && O.__importStar || function(S) {
    if (S && S.__esModule)
      return S;
    var N = {};
    if (S != null)
      for (var C in S)
        C !== "default" && Object.prototype.hasOwnProperty.call(S, C) && e(N, S, C);
    return t(N, S), N;
  }, i = O && O.__importDefault || function(S) {
    return S && S.__esModule ? S : { default: S };
  };
  Object.defineProperty(r, "__esModule", { value: !0 }), r.DomUtils = r.parseFeed = r.getFeed = r.ElementType = r.Tokenizer = r.createDomStream = r.parseDOM = r.parseDocument = r.DefaultHandler = r.DomHandler = r.Parser = void 0;
  var n = Me, a = Me;
  Object.defineProperty(r, "Parser", { enumerable: !0, get: function() {
    return a.Parser;
  } });
  var l = ce, o = ce;
  Object.defineProperty(r, "DomHandler", { enumerable: !0, get: function() {
    return o.DomHandler;
  } }), Object.defineProperty(r, "DefaultHandler", { enumerable: !0, get: function() {
    return o.DomHandler;
  } });
  function f(S, N) {
    var C = new l.DomHandler(void 0, N);
    return new n.Parser(C, N).end(S), C.root;
  }
  r.parseDocument = f;
  function h(S, N) {
    return f(S, N).children;
  }
  r.parseDOM = h;
  function y(S, N, C) {
    var _ = new l.DomHandler(S, N, C);
    return new n.Parser(_, N);
  }
  r.createDomStream = y;
  var s = ou;
  Object.defineProperty(r, "Tokenizer", { enumerable: !0, get: function() {
    return i(s).default;
  } }), r.ElementType = u(Ie);
  var c = ct, x = ct;
  Object.defineProperty(r, "getFeed", { enumerable: !0, get: function() {
    return x.getFeed;
  } });
  var E = { xmlMode: !0 };
  function b(S, N) {
    return N === void 0 && (N = E), (0, c.getFeed)(h(S, N));
  }
  r.parseFeed = b, r.DomUtils = u(ct);
})(ur);
var Nn = (r) => {
  if (typeof r != "string")
    throw new TypeError("Expected a string");
  return r.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}, bu = {};
Object.defineProperty(bu, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Mu(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function _n(r) {
  var e, t;
  return Mu(r) === !1 ? !1 : (e = r.constructor, e === void 0 ? !0 : (t = e.prototype, !(Mu(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
bu.isPlainObject = _n;
var In = function(e) {
  return Cn(e) && !Dn(e);
};
function Cn(r) {
  return !!r && typeof r == "object";
}
function Dn(r) {
  var e = Object.prototype.toString.call(r);
  return e === "[object RegExp]" || e === "[object Date]" || Mn(r);
}
var Pn = typeof Symbol == "function" && Symbol.for, Ln = Pn ? Symbol.for("react.element") : 60103;
function Mn(r) {
  return r.$$typeof === Ln;
}
function kn(r) {
  return Array.isArray(r) ? [] : {};
}
function Re(r, e) {
  return e.clone !== !1 && e.isMergeableObject(r) ? Ae(kn(r), r, e) : r;
}
function Rn(r, e, t) {
  return r.concat(e).map(function(u) {
    return Re(u, t);
  });
}
function qn(r, e) {
  if (!e.customMerge)
    return Ae;
  var t = e.customMerge(r);
  return typeof t == "function" ? t : Ae;
}
function jn(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(e) {
    return Object.propertyIsEnumerable.call(r, e);
  }) : [];
}
function ku(r) {
  return Object.keys(r).concat(jn(r));
}
function Ir(r, e) {
  try {
    return e in r;
  } catch {
    return !1;
  }
}
function Bn(r, e) {
  return Ir(r, e) && !(Object.hasOwnProperty.call(r, e) && Object.propertyIsEnumerable.call(r, e));
}
function Un(r, e, t) {
  var u = {};
  return t.isMergeableObject(r) && ku(r).forEach(function(i) {
    u[i] = Re(r[i], t);
  }), ku(e).forEach(function(i) {
    Bn(r, i) || (Ir(r, i) && t.isMergeableObject(e[i]) ? u[i] = qn(i, t)(r[i], e[i], t) : u[i] = Re(e[i], t));
  }), u;
}
function Ae(r, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || Rn, t.isMergeableObject = t.isMergeableObject || In, t.cloneUnlessOtherwiseSpecified = Re;
  var u = Array.isArray(e), i = Array.isArray(r), n = u === i;
  return n ? u ? t.arrayMerge(r, e, t) : Un(r, e, t) : Re(e, t);
}
Ae.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(u, i) {
    return Ae(u, i, t);
  }, {});
};
var Hn = Ae, $n = Hn, Cr = { exports: {} };
(function(r) {
  (function(e, t) {
    r.exports ? r.exports = t() : e.parseSrcset = t();
  })(O, function() {
    return function(e) {
      function t(_) {
        return _ === " " || // space
        _ === "	" || // horizontal tab
        _ === `
` || // new line
        _ === "\f" || // form feed
        _ === "\r";
      }
      function u(_) {
        var R, F = _.exec(e.substring(b));
        if (F)
          return R = F[0], b += R.length, R;
      }
      for (var i = e.length, n = /^[ \t\n\r\u000c]+/, a = /^[, \t\n\r\u000c]+/, l = /^[^ \t\n\r\u000c]+/, o = /[,]+$/, f = /^\d+$/, h = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, y, s, c, x, E, b = 0, S = []; ; ) {
        if (u(a), b >= i)
          return S;
        y = u(l), s = [], y.slice(-1) === "," ? (y = y.replace(o, ""), C()) : N();
      }
      function N() {
        for (u(n), c = "", x = "in descriptor"; ; ) {
          if (E = e.charAt(b), x === "in descriptor")
            if (t(E))
              c && (s.push(c), c = "", x = "after descriptor");
            else if (E === ",") {
              b += 1, c && s.push(c), C();
              return;
            } else if (E === "(")
              c = c + E, x = "in parens";
            else if (E === "") {
              c && s.push(c), C();
              return;
            } else
              c = c + E;
          else if (x === "in parens")
            if (E === ")")
              c = c + E, x = "in descriptor";
            else if (E === "") {
              s.push(c), C();
              return;
            } else
              c = c + E;
          else if (x === "after descriptor" && !t(E))
            if (E === "") {
              C();
              return;
            } else
              x = "in descriptor", b -= 1;
          b += 1;
        }
      }
      function C() {
        var _ = !1, R, F, Y, H, z = {}, G, p, v, w, A;
        for (H = 0; H < s.length; H++)
          G = s[H], p = G[G.length - 1], v = G.substring(0, G.length - 1), w = parseInt(v, 10), A = parseFloat(v), f.test(v) && p === "w" ? ((R || F) && (_ = !0), w === 0 ? _ = !0 : R = w) : h.test(v) && p === "x" ? ((R || F || Y) && (_ = !0), A < 0 ? _ = !0 : F = A) : f.test(v) && p === "h" ? ((Y || F) && (_ = !0), w === 0 ? _ = !0 : Y = w) : _ = !0;
        _ ? console && console.log && console.log("Invalid srcset descriptor found in '" + e + "' at '" + G + "'.") : (z.url = y, R && (z.w = R), F && (z.d = F), Y && (z.h = Y), S.push(z));
      }
    };
  });
})(Cr);
var Fn = Cr.exports, mu = { exports: {} }, j = String, Dr = function() {
  return { isColorSupported: !1, reset: j, bold: j, dim: j, italic: j, underline: j, inverse: j, hidden: j, strikethrough: j, black: j, red: j, green: j, yellow: j, blue: j, magenta: j, cyan: j, white: j, gray: j, bgBlack: j, bgRed: j, bgGreen: j, bgYellow: j, bgBlue: j, bgMagenta: j, bgCyan: j, bgWhite: j };
};
mu.exports = Dr();
mu.exports.createColors = Dr;
var Vn = mu.exports;
const zn = {}, Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn
}, Symbol.toStringTag, { value: "Module" })), te = /* @__PURE__ */ wi(Gn);
let Ru = Vn, qu = te, Gt = class Pr extends Error {
  constructor(e, t, u, i, n, a) {
    super(e), this.name = "CssSyntaxError", this.reason = e, n && (this.file = n), i && (this.source = i), a && (this.plugin = a), typeof t < "u" && typeof u < "u" && (typeof t == "number" ? (this.line = t, this.column = u) : (this.line = t.line, this.column = t.column, this.endLine = u.line, this.endColumn = u.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Pr);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let t = this.source;
    e == null && (e = Ru.isColorSupported), qu && e && (t = qu(t));
    let u = t.split(/\r?\n/), i = Math.max(this.line - 3, 0), n = Math.min(this.line + 2, u.length), a = String(n).length, l, o;
    if (e) {
      let { bold: f, gray: h, red: y } = Ru.createColors(!0);
      l = (s) => f(y(s)), o = (s) => h(s);
    } else
      l = o = (f) => f;
    return u.slice(i, n).map((f, h) => {
      let y = i + 1 + h, s = " " + (" " + y).slice(-a) + " | ";
      if (y === this.line) {
        let c = o(s.replace(/\d/g, " ")) + f.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return l(">") + o(s) + f + `
 ` + c + l("^");
      }
      return " " + o(s) + f;
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var gu = Gt;
Gt.default = Gt;
var Je = {};
Je.isClean = Symbol("isClean");
Je.my = Symbol("my");
const ju = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function Wn(r) {
  return r[0].toUpperCase() + r.slice(1);
}
let Wt = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let u = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? u += e.raws.afterName : i && (u += " "), e.nodes)
      this.block(e, u + i);
    else {
      let n = (e.raws.between || "") + (t ? ";" : "");
      this.builder(u + i + n, e);
    }
  }
  beforeAfter(e, t) {
    let u;
    e.type === "decl" ? u = this.raw(e, null, "beforeDecl") : e.type === "comment" ? u = this.raw(e, null, "beforeComment") : t === "before" ? u = this.raw(e, null, "beforeRule") : u = this.raw(e, null, "beforeClose");
    let i = e.parent, n = 0;
    for (; i && i.type !== "root"; )
      n += 1, i = i.parent;
    if (u.includes(`
`)) {
      let a = this.raw(e, null, "indent");
      if (a.length)
        for (let l = 0; l < n; l++)
          u += a;
    }
    return u;
  }
  block(e, t) {
    let u = this.raw(e, "between", "beforeOpen");
    this.builder(t + u + "{", e, "start");
    let i;
    e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let u = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let n = e.nodes[i], a = this.raw(n, "before");
      a && this.builder(a), this.stringify(n, t !== i || u);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), u = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + u + "*/", e);
  }
  decl(e, t) {
    let u = this.raw(e, "between", "colon"), i = e.prop + u + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"), t && (i += ";"), this.builder(i, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, u) {
    let i;
    if (u || (u = t), t && (i = e.raws[t], typeof i < "u"))
      return i;
    let n = e.parent;
    if (u === "before" && (!n || n.type === "root" && n.first === e || n && n.type === "document"))
      return "";
    if (!n)
      return ju[u];
    let a = e.root();
    if (a.rawCache || (a.rawCache = {}), typeof a.rawCache[u] < "u")
      return a.rawCache[u];
    if (u === "before" || u === "after")
      return this.beforeAfter(e, u);
    {
      let l = "raw" + Wn(u);
      this[l] ? i = this[l](a, e) : a.walk((o) => {
        if (i = o.raws[t], typeof i < "u")
          return !1;
      });
    }
    return typeof i > "u" && (i = ju[u]), a.rawCache[u] = i, i;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((u) => {
      if (u.nodes && u.nodes.length > 0 && typeof u.raws.after < "u")
        return t = u.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let u;
    return e.walkComments((i) => {
      if (typeof i.raws.before < "u")
        return u = i.raws.before, u.includes(`
`) && (u = u.replace(/[^\n]+$/, "")), !1;
    }), typeof u > "u" ? u = this.raw(t, null, "beforeDecl") : u && (u = u.replace(/\S/g, "")), u;
  }
  rawBeforeDecl(e, t) {
    let u;
    return e.walkDecls((i) => {
      if (typeof i.raws.before < "u")
        return u = i.raws.before, u.includes(`
`) && (u = u.replace(/[^\n]+$/, "")), !1;
    }), typeof u > "u" ? u = this.raw(t, null, "beforeRule") : u && (u = u.replace(/\S/g, "")), u;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((u) => {
      if (u.type !== "decl" && (t = u.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((u) => {
      if (u.nodes && (u.parent !== e || e.first !== u) && typeof u.raws.before < "u")
        return t = u.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((u) => {
      if (typeof u.raws.between < "u")
        return t = u.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((u) => {
      if (u.nodes && u.nodes.length === 0 && (t = u.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent)
      return e.raws.indent;
    let t;
    return e.walk((u) => {
      let i = u.parent;
      if (i && i !== e && i.parent && i.parent === e && typeof u.raws.before < "u") {
        let n = u.raws.before.split(`
`);
        return t = n[n.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((u) => {
      if (u.nodes && u.nodes.length && u.last.type === "decl" && (t = u.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let u = e[t], i = e.raws[t];
    return i && i.value === u ? i.raw : u;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var Lr = Wt;
Wt.default = Wt;
let Xn = Lr;
function Xt(r, e) {
  new Xn(e).stringify(r);
}
var Dt = Xt;
Xt.default = Xt;
let { isClean: et, my: Qn } = Je, Jn = gu, Zn = Lr, Yn = Dt;
function Qt(r, e) {
  let t = new r.constructor();
  for (let u in r) {
    if (!Object.prototype.hasOwnProperty.call(r, u) || u === "proxyCache")
      continue;
    let i = r[u], n = typeof i;
    u === "parent" && n === "object" ? e && (t[u] = e) : u === "source" ? t[u] = i : Array.isArray(i) ? t[u] = i.map((a) => Qt(a, t)) : (n === "object" && i !== null && (i = Qt(i)), t[u] = i);
  }
  return t;
}
let Jt = class {
  constructor(e = {}) {
    this.raws = {}, this[et] = !1, this[Qn] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let u of e[t])
          typeof u.clone == "function" ? this.append(u.clone()) : this.append(u);
      } else
        this[t] = e[t];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e)
      this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = Qt(this);
    for (let u in e)
      t[u] = e[u];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: u, start: i } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: i.column, line: i.line },
        { column: u.column, line: u.line },
        t
      );
    }
    return new Jn(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, u) {
        return e[t] === u || (e[t] = u, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  markDirty() {
    if (this[et]) {
      this[et] = !1;
      let e = this;
      for (; e = e.parent; )
        e[et] = !1;
    }
  }
  next() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let u = this.source.start;
    if (e.index)
      u = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let i = t.indexOf(e.word);
      i !== -1 && (u = this.positionInside(i, t));
    }
    return u;
  }
  positionInside(e, t) {
    let u = t || this.toString(), i = this.source.start.column, n = this.source.start.line;
    for (let a = 0; a < e; a++)
      u[a] === `
` ? (i = 1, n += 1) : i += 1;
    return { column: i, line: n };
  }
  prev() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let t = {
      column: this.source.start.column,
      line: this.source.start.line
    }, u = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: t.column + 1,
      line: t.line
    };
    if (e.word) {
      let i = this.toString(), n = i.indexOf(e.word);
      n !== -1 && (t = this.positionInside(n, i), u = this.positionInside(n + e.word.length, i));
    } else
      e.start ? t = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (t = this.positionInside(e.index)), e.end ? u = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? u = this.positionInside(e.endIndex) : e.index && (u = this.positionInside(e.index + 1));
    return (u.line < t.line || u.line === t.line && u.column <= t.column) && (u = { column: t.column + 1, line: t.line }), { end: u, start: t };
  }
  raw(e, t) {
    return new Zn().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, u = !1;
      for (let i of e)
        i === this ? u = !0 : u ? (this.parent.insertAfter(t, i), t = i) : this.parent.insertBefore(t, i);
      u || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let u = {}, i = t == null;
    t = t || /* @__PURE__ */ new Map();
    let n = 0;
    for (let a in this) {
      if (!Object.prototype.hasOwnProperty.call(this, a) || a === "parent" || a === "proxyCache")
        continue;
      let l = this[a];
      if (Array.isArray(l))
        u[a] = l.map((o) => typeof o == "object" && o.toJSON ? o.toJSON(null, t) : o);
      else if (typeof l == "object" && l.toJSON)
        u[a] = l.toJSON(null, t);
      else if (a === "source") {
        let o = t.get(l.input);
        o == null && (o = n, t.set(l.input, n), n++), u[a] = {
          end: l.end,
          inputId: o,
          start: l.start
        };
      } else
        u[a] = l;
    }
    return i && (u.inputs = [...t.keys()].map((a) => a.toJSON())), u;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = Yn) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (u) => {
      t += u;
    }), t;
  }
  warn(e, t, u) {
    let i = { node: this };
    for (let n in u)
      i[n] = u[n];
    return e.warn(t, i);
  }
  get proxyOf() {
    return this;
  }
};
var Pt = Jt;
Jt.default = Jt;
let Kn = Pt, Zt = class extends Kn {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Lt = Zt;
Zt.default = Zt;
let e0 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", t0 = (r, e = 21) => (t = e) => {
  let u = "", i = t;
  for (; i--; )
    u += r[Math.random() * r.length | 0];
  return u;
}, u0 = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += e0[Math.random() * 64 | 0];
  return e;
};
var r0 = { nanoid: u0, customAlphabet: t0 };
let { SourceMapConsumer: Bu, SourceMapGenerator: Uu } = te, { existsSync: i0, readFileSync: n0 } = te, { dirname: Bt, join: a0 } = te;
function s0(r) {
  return Buffer ? Buffer.from(r, "base64").toString() : window.atob(r);
}
let Yt = class {
  constructor(e, t) {
    if (t.map === !1)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let u = t.map ? t.map.prev : void 0, i = this.loadMap(t.from, u);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = Bt(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Bu(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, u = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, n = /^data:application\/json,/;
    if (i.test(e) || n.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (t.test(e) || u.test(e))
      return s0(e.substr(RegExp.lastMatch.length));
    let a = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + a);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!t)
      return;
    let u = e.lastIndexOf(t.pop()), i = e.indexOf("*/", u);
    u > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(u, i)));
  }
  loadFile(e) {
    if (this.root = Bt(e), i0(e))
      return this.mapFile = e, n0(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1)
      return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let u = t(e);
        if (u) {
          let i = this.loadFile(u);
          if (!i)
            throw new Error(
              "Unable to load previous source map: " + u.toString()
            );
          return i;
        }
      } else {
        if (t instanceof Bu)
          return Uu.fromSourceMap(t).toString();
        if (t instanceof Uu)
          return t.toString();
        if (this.isMap(t))
          return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let u = this.annotation;
        return e && (u = a0(Bt(e), u)), this.loadFile(u);
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var Mr = Yt;
Yt.default = Yt;
let { SourceMapConsumer: o0, SourceMapGenerator: c0 } = te, { fileURLToPath: Hu, pathToFileURL: tt } = te, { isAbsolute: Kt, resolve: eu } = te, { nanoid: l0 } = r0, Ut = te, $u = gu, f0 = Mr, Ht = Symbol("fromOffsetCache"), d0 = !!(o0 && c0), Fu = !!(eu && Kt), yt = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!Fu || /^\w+:\/\//.test(t.from) || Kt(t.from) ? this.file = t.from : this.file = eu(t.from)), Fu && d0) {
      let u = new f0(this.css, t);
      if (u.text) {
        this.map = u;
        let i = u.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + l0(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, u, i = {}) {
    let n, a, l;
    if (t && typeof t == "object") {
      let f = t, h = u;
      if (typeof f.offset == "number") {
        let y = this.fromOffset(f.offset);
        t = y.line, u = y.col;
      } else
        t = f.line, u = f.column;
      if (typeof h.offset == "number") {
        let y = this.fromOffset(h.offset);
        a = y.line, l = y.col;
      } else
        a = h.line, l = h.column;
    } else if (!u) {
      let f = this.fromOffset(t);
      t = f.line, u = f.col;
    }
    let o = this.origin(t, u, a, l);
    return o ? n = new $u(
      e,
      o.endLine === void 0 ? o.line : { column: o.column, line: o.line },
      o.endLine === void 0 ? o.column : { column: o.endColumn, line: o.endLine },
      o.source,
      o.file,
      i.plugin
    ) : n = new $u(
      e,
      a === void 0 ? t : { column: u, line: t },
      a === void 0 ? u : { column: l, line: a },
      this.css,
      this.file,
      i.plugin
    ), n.input = { column: u, endColumn: l, endLine: a, line: t, source: this.css }, this.file && (tt && (n.input.url = tt(this.file).toString()), n.input.file = this.file), n;
  }
  fromOffset(e) {
    let t, u;
    if (this[Ht])
      u = this[Ht];
    else {
      let n = this.css.split(`
`);
      u = new Array(n.length);
      let a = 0;
      for (let l = 0, o = n.length; l < o; l++)
        u[l] = a, a += n[l].length + 1;
      this[Ht] = u;
    }
    t = u[u.length - 1];
    let i = 0;
    if (e >= t)
      i = u.length - 1;
    else {
      let n = u.length - 2, a;
      for (; i < n; )
        if (a = i + (n - i >> 1), e < u[a])
          n = a - 1;
        else if (e >= u[a + 1])
          i = a + 1;
        else {
          i = a;
          break;
        }
    }
    return {
      col: e - u[i] + 1,
      line: i + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : eu(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, u, i) {
    if (!this.map)
      return !1;
    let n = this.map.consumer(), a = n.originalPositionFor({ column: t, line: e });
    if (!a.source)
      return !1;
    let l;
    typeof u == "number" && (l = n.originalPositionFor({ column: i, line: u }));
    let o;
    Kt(a.source) ? o = tt(a.source) : o = new URL(
      a.source,
      this.map.consumer().sourceRoot || tt(this.map.mapFile)
    );
    let f = {
      column: a.column,
      endColumn: l && l.column,
      endLine: l && l.line,
      line: a.line,
      url: o.toString()
    };
    if (o.protocol === "file:")
      if (Hu)
        f.file = Hu(o);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let h = n.sourceContentFor(a.source);
    return h && (f.source = h), f;
  }
  toJSON() {
    let e = {};
    for (let t of ["hasBOM", "css", "file", "id"])
      this[t] != null && (e[t] = this[t]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var Mt = yt;
yt.default = yt;
Ut && Ut.registerInput && Ut.registerInput(yt);
let { SourceMapConsumer: kr, SourceMapGenerator: ft } = te, { dirname: dt, relative: Rr, resolve: qr, sep: jr } = te, { pathToFileURL: Vu } = te, h0 = Mt, p0 = !!(kr && ft), b0 = !!(dt && qr && Rr && jr), m0 = class {
  constructor(e, t, u, i) {
    this.stringify = e, this.mapOpts = u.map || {}, this.root = t, this.opts = u, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let t = `
`;
    this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let t = this.toUrl(this.path(e.file)), u = e.root || dt(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new kr(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, t, this.toUrl(this.path(u)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t);
      } else
        this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), b0 && p0 && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (t) => {
        e += t;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = ft.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new ft({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new ft({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, u = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, n, a;
    this.stringify(this.root, (l, o, f) => {
      if (this.css += l, o && f !== "end" && (i.generated.line = e, i.generated.column = t - 1, o.source && o.source.start ? (i.source = this.sourcePath(o), i.original.line = o.source.start.line, i.original.column = o.source.start.column - 1, this.map.addMapping(i)) : (i.source = u, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), n = l.match(/\n/g), n ? (e += n.length, a = l.lastIndexOf(`
`), t = l.length - a) : t += l.length, o && f !== "start") {
        let h = o.parent || { raws: {} };
        (!(o.type === "decl" || o.type === "atrule" && !o.nodes) || o !== h.last || h.raws.semicolon) && (o.source && o.source.end ? (i.source = this.sourcePath(o), i.original.line = o.source.end.line, i.original.column = o.source.end.column - 1, i.generated.line = e, i.generated.column = t - 2, this.map.addMapping(i)) : (i.source = u, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = t - 1, this.map.addMapping(i)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t) => t.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e))
      return e;
    let t = this.memoizedPaths.get(e);
    if (t)
      return t;
    let u = this.opts.to ? dt(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (u = dt(qr(u, this.mapOpts.annotation)));
    let i = Rr(u, e);
    return this.memoizedPaths.set(e, i), i;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let t = e.source.input.map;
            this.previousMaps.includes(t) || this.previousMaps.push(t);
          }
        });
      else {
        let e = new h0(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let u = t.source.input.from;
          if (u && !e[u]) {
            e[u] = !0;
            let i = this.usesFileUrls ? this.toFileUrl(u) : this.toUrl(this.path(u));
            this.map.setSourceContent(i, t.source.input.css);
          }
        }
      });
    else if (this.css) {
      let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(t, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let t = this.memoizedFileURLs.get(e);
    if (t)
      return t;
    if (Vu) {
      let u = Vu(e).toString();
      return this.memoizedFileURLs.set(e, u), u;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t)
      return t;
    jr === "\\" && (e = e.replace(/\\/g, "/"));
    let u = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, u), u;
  }
};
var Br = m0;
let g0 = Pt, tu = class extends g0 {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var kt = tu;
tu.default = tu;
let { isClean: Ur, my: Hr } = Je, $r = Lt, Fr = kt, y0 = Pt, Vr, yu, xu, zr;
function Gr(r) {
  return r.map((e) => (e.nodes && (e.nodes = Gr(e.nodes)), delete e.source, e));
}
function Wr(r) {
  if (r[Ur] = !1, r.proxyOf.nodes)
    for (let e of r.proxyOf.nodes)
      Wr(e);
}
let le = class Xr extends y0 {
  append(...e) {
    for (let t of e) {
      let u = this.normalize(t, this.last);
      for (let i of u)
        this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes)
        t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes)
      return;
    let t = this.getIterator(), u, i;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (u = this.indexes[t], i = e(this.proxyOf.nodes[u], u), i !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], i;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...u) => e[t](
          ...u.map((i) => typeof i == "function" ? (n, a) => i(n.toProxy(), a) : i)
        ) : t === "every" || t === "some" ? (u) => e[t](
          (i, ...n) => u(i.toProxy(), ...n)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((u) => u.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, u) {
        return e[t] === u || (e[t] = u, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let u = this.index(e), i = this.normalize(t, this.proxyOf.nodes[u]).reverse();
    u = this.index(e);
    for (let a of i)
      this.proxyOf.nodes.splice(u + 1, 0, a);
    let n;
    for (let a in this.indexes)
      n = this.indexes[a], u < n && (this.indexes[a] = n + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let u = this.index(e), i = u === 0 ? "prepend" : !1, n = this.normalize(t, this.proxyOf.nodes[u], i).reverse();
    u = this.index(e);
    for (let l of n)
      this.proxyOf.nodes.splice(u, 0, l);
    let a;
    for (let l in this.indexes)
      a = this.indexes[l], u <= a && (this.indexes[l] = a + n.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = Gr(Vr(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new $r(e)];
    } else if (e.selector)
      e = [new yu(e)];
    else if (e.name)
      e = [new xu(e)];
    else if (e.text)
      e = [new Fr(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[Hr] || Xr.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[Ur] && Wr(i), typeof i.raws.before > "u" && t && typeof t.raws.before < "u" && (i.raws.before = t.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let u = this.normalize(t, this.first, "prepend").reverse();
      for (let i of u)
        this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes)
        this.indexes[i] = this.indexes[i] + u.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes)
      e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let u in this.indexes)
      t = this.indexes[u], t >= e && (this.indexes[u] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, u) {
    return u || (u = t, t = {}), this.walkDecls((i) => {
      t.props && !t.props.includes(i.prop) || t.fast && !i.value.includes(t.fast) || (i.value = i.value.replace(e, u));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, u) => {
      let i;
      try {
        i = e(t, u);
      } catch (n) {
        throw t.addToError(n);
      }
      return i !== !1 && t.walk && (i = t.walk(e)), i;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((u, i) => {
      if (u.type === "atrule" && e.test(u.name))
        return t(u, i);
    }) : this.walk((u, i) => {
      if (u.type === "atrule" && u.name === e)
        return t(u, i);
    }) : (t = e, this.walk((u, i) => {
      if (u.type === "atrule")
        return t(u, i);
    }));
  }
  walkComments(e) {
    return this.walk((t, u) => {
      if (t.type === "comment")
        return e(t, u);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((u, i) => {
      if (u.type === "decl" && e.test(u.prop))
        return t(u, i);
    }) : this.walk((u, i) => {
      if (u.type === "decl" && u.prop === e)
        return t(u, i);
    }) : (t = e, this.walk((u, i) => {
      if (u.type === "decl")
        return t(u, i);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((u, i) => {
      if (u.type === "rule" && e.test(u.selector))
        return t(u, i);
    }) : this.walk((u, i) => {
      if (u.type === "rule" && u.selector === e)
        return t(u, i);
    }) : (t = e, this.walk((u, i) => {
      if (u.type === "rule")
        return t(u, i);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
le.registerParse = (r) => {
  Vr = r;
};
le.registerRule = (r) => {
  yu = r;
};
le.registerAtRule = (r) => {
  xu = r;
};
le.registerRoot = (r) => {
  zr = r;
};
var ve = le;
le.default = le;
le.rebuild = (r) => {
  r.type === "atrule" ? Object.setPrototypeOf(r, xu.prototype) : r.type === "rule" ? Object.setPrototypeOf(r, yu.prototype) : r.type === "decl" ? Object.setPrototypeOf(r, $r.prototype) : r.type === "comment" ? Object.setPrototypeOf(r, Fr.prototype) : r.type === "root" && Object.setPrototypeOf(r, zr.prototype), r[Hr] = !0, r.nodes && r.nodes.forEach((e) => {
    le.rebuild(e);
  });
};
let x0 = ve, Qr, Jr, qe = class extends x0 {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Qr(new Jr(), this, e).stringify();
  }
};
qe.registerLazyResult = (r) => {
  Qr = r;
};
qe.registerProcessor = (r) => {
  Jr = r;
};
var vu = qe;
qe.default = qe;
let zu = {};
var Zr = function(e) {
  zu[e] || (zu[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let uu = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let u = t.node.rangeBy(t);
      this.line = u.start.line, this.column = u.start.column, this.endLine = u.end.line, this.endColumn = u.end.column;
    }
    for (let u in t)
      this[u] = t[u];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var Yr = uu;
uu.default = uu;
let v0 = Yr, ru = class {
  constructor(e, t, u) {
    this.processor = e, this.messages = [], this.root = t, this.opts = u, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let u = new v0(e, t);
    return this.messages.push(u), u;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var wu = ru;
ru.default = ru;
const $t = 39, Gu = 34, ut = 92, Wu = 47, rt = 10, Ce = 32, it = 12, nt = 9, at = 13, w0 = 91, S0 = 93, E0 = 40, T0 = 41, A0 = 123, O0 = 125, N0 = 59, _0 = 42, I0 = 58, C0 = 64, st = /[\t\n\f\r "#'()/;[\\\]{}]/g, ot = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, D0 = /.[\r\n"'(/\\]/, Xu = /[\da-f]/i;
var P0 = function(e, t = {}) {
  let u = e.css.valueOf(), i = t.ignoreErrors, n, a, l, o, f, h, y, s, c, x, E = u.length, b = 0, S = [], N = [];
  function C() {
    return b;
  }
  function _(H) {
    throw e.error("Unclosed " + H, b);
  }
  function R() {
    return N.length === 0 && b >= E;
  }
  function F(H) {
    if (N.length)
      return N.pop();
    if (b >= E)
      return;
    let z = H ? H.ignoreUnclosed : !1;
    switch (n = u.charCodeAt(b), n) {
      case rt:
      case Ce:
      case nt:
      case at:
      case it: {
        a = b;
        do
          a += 1, n = u.charCodeAt(a);
        while (n === Ce || n === rt || n === nt || n === at || n === it);
        x = ["space", u.slice(b, a)], b = a - 1;
        break;
      }
      case w0:
      case S0:
      case A0:
      case O0:
      case I0:
      case N0:
      case T0: {
        let G = String.fromCharCode(n);
        x = [G, G, b];
        break;
      }
      case E0: {
        if (s = S.length ? S.pop()[1] : "", c = u.charCodeAt(b + 1), s === "url" && c !== $t && c !== Gu && c !== Ce && c !== rt && c !== nt && c !== it && c !== at) {
          a = b;
          do {
            if (h = !1, a = u.indexOf(")", a + 1), a === -1)
              if (i || z) {
                a = b;
                break;
              } else
                _("bracket");
            for (y = a; u.charCodeAt(y - 1) === ut; )
              y -= 1, h = !h;
          } while (h);
          x = ["brackets", u.slice(b, a + 1), b, a], b = a;
        } else
          a = u.indexOf(")", b + 1), o = u.slice(b, a + 1), a === -1 || D0.test(o) ? x = ["(", "(", b] : (x = ["brackets", o, b, a], b = a);
        break;
      }
      case $t:
      case Gu: {
        l = n === $t ? "'" : '"', a = b;
        do {
          if (h = !1, a = u.indexOf(l, a + 1), a === -1)
            if (i || z) {
              a = b + 1;
              break;
            } else
              _("string");
          for (y = a; u.charCodeAt(y - 1) === ut; )
            y -= 1, h = !h;
        } while (h);
        x = ["string", u.slice(b, a + 1), b, a], b = a;
        break;
      }
      case C0: {
        st.lastIndex = b + 1, st.test(u), st.lastIndex === 0 ? a = u.length - 1 : a = st.lastIndex - 2, x = ["at-word", u.slice(b, a + 1), b, a], b = a;
        break;
      }
      case ut: {
        for (a = b, f = !0; u.charCodeAt(a + 1) === ut; )
          a += 1, f = !f;
        if (n = u.charCodeAt(a + 1), f && n !== Wu && n !== Ce && n !== rt && n !== nt && n !== at && n !== it && (a += 1, Xu.test(u.charAt(a)))) {
          for (; Xu.test(u.charAt(a + 1)); )
            a += 1;
          u.charCodeAt(a + 1) === Ce && (a += 1);
        }
        x = ["word", u.slice(b, a + 1), b, a], b = a;
        break;
      }
      default: {
        n === Wu && u.charCodeAt(b + 1) === _0 ? (a = u.indexOf("*/", b + 2) + 1, a === 0 && (i || z ? a = u.length : _("comment")), x = ["comment", u.slice(b, a + 1), b, a], b = a) : (ot.lastIndex = b + 1, ot.test(u), ot.lastIndex === 0 ? a = u.length - 1 : a = ot.lastIndex - 2, x = ["word", u.slice(b, a + 1), b, a], S.push(x), b = a);
        break;
      }
    }
    return b++, x;
  }
  function Y(H) {
    N.push(H);
  }
  return {
    back: Y,
    endOfFile: R,
    nextToken: F,
    position: C
  };
};
let Kr = ve, xt = class extends Kr {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var Su = xt;
xt.default = xt;
Kr.registerAtRule(xt);
let ei = ve, ti, ui, Oe = class extends ei {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, u) {
    let i = super.normalize(e);
    if (t) {
      if (u === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let n of i)
          n.raws.before = t.raws.before;
    }
    return i;
  }
  removeChild(e, t) {
    let u = this.index(e);
    return !t && u === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[u].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new ti(new ui(), this, e).stringify();
  }
};
Oe.registerLazyResult = (r) => {
  ti = r;
};
Oe.registerProcessor = (r) => {
  ui = r;
};
var Ze = Oe;
Oe.default = Oe;
ei.registerRoot(Oe);
let je = {
  comma(r) {
    return je.split(r, [","], !0);
  },
  space(r) {
    let e = [" ", `
`, "	"];
    return je.split(r, e);
  },
  split(r, e, t) {
    let u = [], i = "", n = !1, a = 0, l = !1, o = "", f = !1;
    for (let h of r)
      f ? f = !1 : h === "\\" ? f = !0 : l ? h === o && (l = !1) : h === '"' || h === "'" ? (l = !0, o = h) : h === "(" ? a += 1 : h === ")" ? a > 0 && (a -= 1) : a === 0 && e.includes(h) && (n = !0), n ? (i !== "" && u.push(i.trim()), i = "", n = !1) : i += h;
    return (t || i !== "") && u.push(i.trim()), u;
  }
};
var ri = je;
je.default = je;
let ii = ve, L0 = ri, vt = class extends ii {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return L0.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, u = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(u);
  }
};
var Eu = vt;
vt.default = vt;
ii.registerRule(vt);
let M0 = Lt, k0 = P0, R0 = kt, q0 = Su, j0 = Ze, Qu = Eu;
const Ju = {
  empty: !0,
  space: !0
};
function B0(r) {
  for (let e = r.length - 1; e >= 0; e--) {
    let t = r[e], u = t[3] || t[2];
    if (u)
      return u;
  }
}
let U0 = class {
  constructor(e) {
    this.input = e, this.root = new j0(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new q0();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let u, i, n, a = !1, l = !1, o = [], f = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), u = e[0], u === "(" || u === "[" ? f.push(u === "(" ? ")" : "]") : u === "{" && f.length > 0 ? f.push("}") : u === f[f.length - 1] && f.pop(), f.length === 0)
        if (u === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (u === "{") {
          l = !0;
          break;
        } else if (u === "}") {
          if (o.length > 0) {
            for (n = o.length - 1, i = o[n]; i && i[0] === "space"; )
              i = o[--n];
            i && (t.source.end = this.getPosition(i[3] || i[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          o.push(e);
      else
        o.push(e);
      if (this.tokenizer.endOfFile()) {
        a = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(o), o.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(o), this.raw(t, "params", o), a && (e = o[o.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), l && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1)
      return;
    let u = 0, i;
    for (let n = t - 1; n >= 0 && (i = e[n], !(i[0] !== "space" && (u += 1, u === 2))); n--)
      ;
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let t = 0, u, i, n;
    for (let [a, l] of e.entries()) {
      if (u = l, i = u[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!n)
          this.doubleColon(u);
        else {
          if (n[0] === "word" && n[1] === "progid")
            continue;
          return a;
        }
      n = u;
    }
    return !1;
  }
  comment(e) {
    let t = new R0();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let u = e[1].slice(2, -2);
    if (/^\s*$/.test(u))
      t.text = "", t.raws.left = u, t.raws.right = "";
    else {
      let i = u.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = i[2], t.raws.left = i[1], t.raws.right = i[3];
    }
  }
  createTokenizer() {
    this.tokenizer = k0(this.input);
  }
  decl(e, t) {
    let u = new M0();
    this.init(u, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), u.source.end = this.getPosition(
      i[3] || i[2] || B0(e)
    ), u.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), u.raws.before += e.shift()[1];
    for (u.source.start = this.getPosition(e[0][2]), u.prop = ""; e.length; ) {
      let f = e[0][0];
      if (f === ":" || f === "space" || f === "comment")
        break;
      u.prop += e.shift()[1];
    }
    u.raws.between = "";
    let n;
    for (; e.length; )
      if (n = e.shift(), n[0] === ":") {
        u.raws.between += n[1];
        break;
      } else
        n[0] === "word" && /\w/.test(n[1]) && this.unknownWord([n]), u.raws.between += n[1];
    (u.prop[0] === "_" || u.prop[0] === "*") && (u.raws.before += u.prop[0], u.prop = u.prop.slice(1));
    let a = [], l;
    for (; e.length && (l = e[0][0], !(l !== "space" && l !== "comment")); )
      a.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let f = e.length - 1; f >= 0; f--) {
      if (n = e[f], n[1].toLowerCase() === "!important") {
        u.important = !0;
        let h = this.stringFrom(e, f);
        h = this.spacesFromEnd(e) + h, h !== " !important" && (u.raws.important = h);
        break;
      } else if (n[1].toLowerCase() === "important") {
        let h = e.slice(0), y = "";
        for (let s = f; s > 0; s--) {
          let c = h[s][0];
          if (y.trim().indexOf("!") === 0 && c !== "space")
            break;
          y = h.pop()[1] + y;
        }
        y.trim().indexOf("!") === 0 && (u.important = !0, u.raws.important = y, e = h);
      }
      if (n[0] !== "space" && n[0] !== "comment")
        break;
    }
    e.some((f) => f[0] !== "space" && f[0] !== "comment") && (u.raws.between += a.map((f) => f[1]).join(""), a = []), this.raw(u, "value", a.concat(e), t), u.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new Qu();
    this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return {
      column: t.col,
      line: t.line,
      offset: e
    };
  }
  init(e, t) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(t)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1, u = null, i = !1, n = null, a = [], l = e[1].startsWith("--"), o = [], f = e;
    for (; f; ) {
      if (u = f[0], o.push(f), u === "(" || u === "[")
        n || (n = f), a.push(u === "(" ? ")" : "]");
      else if (l && i && u === "{")
        n || (n = f), a.push("}");
      else if (a.length === 0)
        if (u === ";")
          if (i) {
            this.decl(o, l);
            return;
          } else
            break;
        else if (u === "{") {
          this.rule(o);
          return;
        } else if (u === "}") {
          this.tokenizer.back(o.pop()), t = !0;
          break;
        } else
          u === ":" && (i = !0);
      else
        u === a[a.length - 1] && (a.pop(), a.length === 0 && (n = null));
      f = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), a.length > 0 && this.unclosedBracket(n), t && i) {
      if (!l)
        for (; o.length && (f = o[o.length - 1][0], !(f !== "space" && f !== "comment")); )
          this.tokenizer.back(o.pop());
      this.decl(o, l);
    } else
      this.unknownWord(o);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, t, u, i) {
    let n, a, l = u.length, o = "", f = !0, h, y;
    for (let s = 0; s < l; s += 1)
      n = u[s], a = n[0], a === "space" && s === l - 1 && !i ? f = !1 : a === "comment" ? (y = u[s - 1] ? u[s - 1][0] : "empty", h = u[s + 1] ? u[s + 1][0] : "empty", !Ju[y] && !Ju[h] ? o.slice(-1) === "," ? f = !1 : o += n[1] : f = !1) : o += n[1];
    if (!f) {
      let s = u.reduce((c, x) => c + x[1], "");
      e.raws[t] = { raw: s, value: o };
    }
    e[t] = o;
  }
  rule(e) {
    e.pop();
    let t = new Qu();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, u = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      u = e.pop()[1] + u;
    return u;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, u = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      u += e.shift()[1];
    return u;
  }
  spacesFromEnd(e) {
    let t, u = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      u = e.pop()[1] + u;
    return u;
  }
  stringFrom(e, t) {
    let u = "";
    for (let i = t; i < e.length; i++)
      u += e[i][1];
    return e.splice(t, e.length - t), u;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var H0 = U0;
let $0 = ve, F0 = H0, V0 = Mt;
function wt(r, e) {
  let t = new V0(r, e), u = new F0(t);
  try {
    u.parse();
  } catch (i) {
    throw process.env.NODE_ENV !== "production" && i.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? i.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? i.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (i.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), i;
  }
  return u.root;
}
var Tu = wt;
wt.default = wt;
$0.registerParse(wt);
let { isClean: re, my: z0 } = Je, G0 = Br, W0 = Dt, X0 = ve, Q0 = vu, J0 = Zr, Zu = wu, Z0 = Tu, Y0 = Ze;
const K0 = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, ea = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, ta = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Ne = 0;
function De(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function ni(r) {
  let e = !1, t = K0[r.type];
  return r.type === "decl" ? e = r.prop.toLowerCase() : r.type === "atrule" && (e = r.name.toLowerCase()), e && r.append ? [
    t,
    t + "-" + e,
    Ne,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : r.append ? [t, Ne, t + "Exit"] : [t, t + "Exit"];
}
function Yu(r) {
  let e;
  return r.type === "document" ? e = ["Document", Ne, "DocumentExit"] : r.type === "root" ? e = ["Root", Ne, "RootExit"] : e = ni(r), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: r,
    visitorIndex: 0,
    visitors: []
  };
}
function iu(r) {
  return r[re] = !1, r.nodes && r.nodes.forEach((e) => iu(e)), r;
}
let nu = {}, _e = class ai {
  constructor(e, t, u) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      i = iu(t);
    else if (t instanceof ai || t instanceof Zu)
      i = iu(t.root), t.map && (typeof u.map > "u" && (u.map = {}), u.map.inline || (u.map.inline = !1), u.map.prev = t.map);
    else {
      let n = Z0;
      u.syntax && (n = u.syntax.parse), u.parser && (n = u.parser), n.parse && (n = n.parse);
      try {
        i = n(t, u);
      } catch (a) {
        this.processed = !0, this.error = a;
      }
      i && !i[z0] && X0.rebuild(i);
    }
    this.result = new Zu(e, i, u), this.helpers = { ...nu, postcss: nu, result: this.result }, this.plugins = this.processor.plugins.map((n) => typeof n == "object" && n.prepare ? { ...n, ...n.prepare(this.result) } : n);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, t) {
    let u = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = u.postcssPlugin, e.setMessage();
      else if (u.postcssVersion && process.env.NODE_ENV !== "production") {
        let i = u.postcssPlugin, n = u.postcssVersion, a = this.result.processor.version, l = n.split("."), o = a.split(".");
        (l[0] !== o[0] || parseInt(l[1]) > parseInt(o[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + a + ", but " + i + " uses " + n + ". Perhaps this is the source of the error below."
        );
      }
    } catch (i) {
      console && console.error && console.error(i);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, u, i) => {
      this.listeners[u] || (this.listeners[u] = []), this.listeners[u].push([t, i]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let u in t) {
          if (!ea[u] && /^[A-Z]/.test(u))
            throw new Error(
              `Unknown event ${u} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!ta[u])
            if (typeof t[u] == "object")
              for (let i in t[u])
                i === "*" ? e(t, u, t[u][i]) : e(
                  t,
                  u + "-" + i.toLowerCase(),
                  t[u][i]
                );
            else
              typeof t[u] == "function" && e(t, u, t[u]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], u = this.runOnRoot(t);
      if (De(u))
        try {
          await u;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[re]; ) {
        e[re] = !0;
        let t = [Yu(e)];
        for (; t.length > 0; ) {
          let u = this.visitTick(t);
          if (De(u))
            try {
              await u;
            } catch (i) {
              let n = t[t.length - 1].node;
              throw this.handleError(i, n);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, u] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let i = e.nodes.map(
                (n) => u(n, this.helpers)
              );
              await Promise.all(i);
            } else
              await u(e, this.helpers);
          } catch (i) {
            throw this.handleError(i);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let t = this.result.root.nodes.map(
            (u) => e.Once(u, this.helpers)
          );
          return De(t[0]) ? Promise.all(t) : t;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (t) {
      throw this.handleError(t);
    }
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, t = W0;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let i = new G0(t, this.result.root, this.result.opts).generate();
    return this.result.css = i[0], this.result.map = i[1], this.result;
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (De(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[re]; )
        e[re] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let t of e.nodes)
            this.visitSync(this.listeners.OnceExit, t);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || J0(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [u, i] of e) {
      this.result.lastPlugin = u;
      let n;
      try {
        n = i(t, this.helpers);
      } catch (a) {
        throw this.handleError(a, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (De(n))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: u, visitors: i } = t;
    if (u.type !== "root" && u.type !== "document" && !u.parent) {
      e.pop();
      return;
    }
    if (i.length > 0 && t.visitorIndex < i.length) {
      let [a, l] = i[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === i.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = a;
      try {
        return l(u.toProxy(), this.helpers);
      } catch (o) {
        throw this.handleError(o, u);
      }
    }
    if (t.iterator !== 0) {
      let a = t.iterator, l;
      for (; l = u.nodes[u.indexes[a]]; )
        if (u.indexes[a] += 1, !l[re]) {
          l[re] = !0, e.push(Yu(l));
          return;
        }
      t.iterator = 0, delete u.indexes[a];
    }
    let n = t.events;
    for (; t.eventIndex < n.length; ) {
      let a = n[t.eventIndex];
      if (t.eventIndex += 1, a === Ne) {
        u.nodes && u.nodes.length && (u[re] = !0, t.iterator = u.getIterator());
        return;
      } else if (this.listeners[a]) {
        t.visitors = this.listeners[a];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[re] = !0;
    let t = ni(e);
    for (let u of t)
      if (u === Ne)
        e.nodes && e.each((i) => {
          i[re] || this.walkSync(i);
        });
      else {
        let i = this.listeners[u];
        if (i && this.visitSync(i, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
_e.registerPostcss = (r) => {
  nu = r;
};
var si = _e;
_e.default = _e;
Y0.registerLazyResult(_e);
Q0.registerLazyResult(_e);
let ua = Br, ra = Dt, ia = Zr, na = Tu;
const aa = wu;
let au = class {
  constructor(e, t, u) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = u, this._map = void 0;
    let i, n = ra;
    this.result = new aa(this._processor, i, this._opts), this.result.css = t;
    let a = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return a.root;
      }
    });
    let l = new ua(n, i, this._opts, t);
    if (l.isMap()) {
      let [o, f] = l.generate();
      o && (this.result.css = o), f && (this.result.map = f);
    } else
      l.clearAnnotation(), this.result.css = l.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || ia(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, t = na;
    try {
      e = t(this._css, this._opts);
    } catch (u) {
      this.error = u;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var sa = au;
au.default = au;
let oa = sa, ca = si, la = vu, fa = Ze, Be = class {
  constructor(e = []) {
    this.version = "8.4.38", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let u of e)
      if (u.postcss === !0 ? u = u() : u.postcss && (u = u.postcss), typeof u == "object" && Array.isArray(u.plugins))
        t = t.concat(u.plugins);
      else if (typeof u == "object" && u.postcssPlugin)
        t.push(u);
      else if (typeof u == "function")
        t.push(u);
      else if (typeof u == "object" && (u.parse || u.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(u + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new oa(this, e, t) : new ca(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var da = Be;
Be.default = Be;
fa.registerProcessor(Be);
la.registerProcessor(Be);
let ha = Lt, pa = Mr, ba = kt, ma = Su, ga = Mt, ya = Ze, xa = Eu;
function Ue(r, e) {
  if (Array.isArray(r))
    return r.map((i) => Ue(i));
  let { inputs: t, ...u } = r;
  if (t) {
    e = [];
    for (let i of t) {
      let n = { ...i, __proto__: ga.prototype };
      n.map && (n.map = {
        ...n.map,
        __proto__: pa.prototype
      }), e.push(n);
    }
  }
  if (u.nodes && (u.nodes = r.nodes.map((i) => Ue(i, e))), u.source) {
    let { inputId: i, ...n } = u.source;
    u.source = n, i != null && (u.source.input = e[i]);
  }
  if (u.type === "root")
    return new ya(u);
  if (u.type === "decl")
    return new ha(u);
  if (u.type === "rule")
    return new xa(u);
  if (u.type === "comment")
    return new ba(u);
  if (u.type === "atrule")
    return new ma(u);
  throw new Error("Unknown node type: " + r.type);
}
var va = Ue;
Ue.default = Ue;
let wa = gu, oi = Lt, Sa = si, Ea = ve, Au = da, Ta = Dt, Aa = va, ci = vu, Oa = Yr, li = kt, fi = Su, Na = wu, _a = Mt, Ia = Tu, Ca = ri, di = Eu, hi = Ze, Da = Pt;
function L(...r) {
  return r.length === 1 && Array.isArray(r[0]) && (r = r[0]), new Au(r);
}
L.plugin = function(e, t) {
  let u = !1;
  function i(...a) {
    console && console.warn && !u && (u = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let l = t(...a);
    return l.postcssPlugin = e, l.postcssVersion = new Au().version, l;
  }
  let n;
  return Object.defineProperty(i, "postcss", {
    get() {
      return n || (n = i()), n;
    }
  }), i.process = function(a, l, o) {
    return L([i(o)]).process(a, l);
  }, i;
};
L.stringify = Ta;
L.parse = Ia;
L.fromJSON = Aa;
L.list = Ca;
L.comment = (r) => new li(r);
L.atRule = (r) => new fi(r);
L.decl = (r) => new oi(r);
L.rule = (r) => new di(r);
L.root = (r) => new hi(r);
L.document = (r) => new ci(r);
L.CssSyntaxError = wa;
L.Declaration = oi;
L.Container = Ea;
L.Processor = Au;
L.Document = ci;
L.Comment = li;
L.Warning = Oa;
L.AtRule = fi;
L.Result = Na;
L.Input = _a;
L.Rule = di;
L.Root = hi;
L.Node = Da;
Sa.registerPostcss(L);
var Pa = L;
L.default = L;
const La = ur, Ku = Nn, { isPlainObject: Ma } = bu, er = $n, ka = Fn, { parse: Ra } = Pa, qa = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], ja = ["script", "style"];
function Pe(r, e) {
  r && Object.keys(r).forEach(function(t) {
    e(r[t], t);
  });
}
function oe(r, e) {
  return {}.hasOwnProperty.call(r, e);
}
function tr(r, e) {
  const t = [];
  return Pe(r, function(u) {
    e(u) && t.push(u);
  }), t;
}
function Ba(r) {
  for (const e in r)
    if (oe(r, e))
      return !1;
  return !0;
}
function Ua(r) {
  return r.map(function(e) {
    if (!e.url)
      throw new Error("URL missing");
    return e.url + (e.w ? ` ${e.w}w` : "") + (e.h ? ` ${e.h}h` : "") + (e.d ? ` ${e.d}x` : "");
  }).join(", ");
}
var Ha = He;
const $a = /^[^\0\t\n\f\r /<=>]+$/;
function He(r, e, t) {
  if (r == null)
    return "";
  typeof r == "number" && (r = r.toString());
  let u = "", i = "";
  function n(d, g) {
    const m = this;
    this.tag = d, this.attribs = g || {}, this.tagPosition = u.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
      if (b.length) {
        const T = b[b.length - 1];
        T.text += m.text;
      }
    }, this.updateParentNodeMediaChildren = function() {
      b.length && qa.includes(this.tag) && b[b.length - 1].mediaChildren.push(this.tag);
    };
  }
  e = Object.assign({}, He.defaults, e), e.parser = Object.assign({}, Fa, e.parser);
  const a = function(d) {
    return e.allowedTags === !1 || (e.allowedTags || []).indexOf(d) > -1;
  };
  ja.forEach(function(d) {
    a(d) && !e.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${d}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const l = e.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let o, f;
  e.allowedAttributes && (o = {}, f = {}, Pe(e.allowedAttributes, function(d, g) {
    o[g] = [];
    const m = [];
    d.forEach(function(T) {
      typeof T == "string" && T.indexOf("*") >= 0 ? m.push(Ku(T).replace(/\\\*/g, ".*")) : o[g].push(T);
    }), m.length && (f[g] = new RegExp("^(" + m.join("|") + ")$"));
  }));
  const h = {}, y = {}, s = {};
  Pe(e.allowedClasses, function(d, g) {
    if (o && (oe(o, g) || (o[g] = []), o[g].push("class")), h[g] = d, Array.isArray(d)) {
      const m = [];
      h[g] = [], s[g] = [], d.forEach(function(T) {
        typeof T == "string" && T.indexOf("*") >= 0 ? m.push(Ku(T).replace(/\\\*/g, ".*")) : T instanceof RegExp ? s[g].push(T) : h[g].push(T);
      }), m.length && (y[g] = new RegExp("^(" + m.join("|") + ")$"));
    }
  });
  const c = {};
  let x;
  Pe(e.transformTags, function(d, g) {
    let m;
    typeof d == "function" ? m = d : typeof d == "string" && (m = He.simpleTransform(d)), g === "*" ? x = m : c[g] = m;
  });
  let E, b, S, N, C, _, R = !1;
  Y();
  const F = new La.Parser({
    onopentag: function(d, g) {
      if (e.enforceHtmlBoundary && d === "html" && Y(), C) {
        _++;
        return;
      }
      const m = new n(d, g);
      b.push(m);
      let T = !1;
      const U = !!m.text;
      let B;
      if (oe(c, d) && (B = c[d](d, g), m.attribs = g = B.attribs, B.text !== void 0 && (m.innerText = B.text), d !== B.tagName && (m.name = d = B.tagName, N[E] = B.tagName)), x && (B = x(d, g), m.attribs = g = B.attribs, d !== B.tagName && (m.name = d = B.tagName, N[E] = B.tagName)), (!a(d) || e.disallowedTagsMode === "recursiveEscape" && !Ba(S) || e.nestingLimit != null && E >= e.nestingLimit) && (T = !0, S[E] = !0, (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && l.indexOf(d) !== -1 && (C = !0, _ = 1), S[E] = !0), E++, T) {
        if (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard")
          return;
        i = u, u = "";
      }
      u += "<" + d, d === "script" && (e.allowedScriptHostnames || e.allowedScriptDomains) && (m.innerText = ""), (!o || oe(o, d) || o["*"]) && Pe(g, function(q, M) {
        if (!$a.test(M)) {
          delete m.attribs[M];
          return;
        }
        if (q === "" && !e.allowedEmptyAttributes.includes(M) && (e.nonBooleanAttributes.includes(M) || e.nonBooleanAttributes.includes("*"))) {
          delete m.attribs[M];
          return;
        }
        let Rt = !1;
        if (!o || oe(o, d) && o[d].indexOf(M) !== -1 || o["*"] && o["*"].indexOf(M) !== -1 || oe(f, d) && f[d].test(M) || f["*"] && f["*"].test(M))
          Rt = !0;
        else if (o && o[d]) {
          for (const D of o[d])
            if (Ma(D) && D.name && D.name === M) {
              Rt = !0;
              let P = "";
              if (D.multiple === !0) {
                const pe = q.split(" ");
                for (const ne of pe)
                  D.values.indexOf(ne) !== -1 && (P === "" ? P = ne : P += " " + ne);
              } else
                D.values.indexOf(q) >= 0 && (P = q);
              q = P;
            }
        }
        if (Rt) {
          if (e.allowedSchemesAppliedToAttributes.indexOf(M) !== -1 && z(d, q)) {
            delete m.attribs[M];
            return;
          }
          if (d === "script" && M === "src") {
            let D = !0;
            try {
              const P = G(q);
              if (e.allowedScriptHostnames || e.allowedScriptDomains) {
                const pe = (e.allowedScriptHostnames || []).find(function(ee) {
                  return ee === P.url.hostname;
                }), ne = (e.allowedScriptDomains || []).find(function(ee) {
                  return P.url.hostname === ee || P.url.hostname.endsWith(`.${ee}`);
                });
                D = pe || ne;
              }
            } catch {
              D = !1;
            }
            if (!D) {
              delete m.attribs[M];
              return;
            }
          }
          if (d === "iframe" && M === "src") {
            let D = !0;
            try {
              const P = G(q);
              if (P.isRelativeUrl)
                D = oe(e, "allowIframeRelativeUrls") ? e.allowIframeRelativeUrls : !e.allowedIframeHostnames && !e.allowedIframeDomains;
              else if (e.allowedIframeHostnames || e.allowedIframeDomains) {
                const pe = (e.allowedIframeHostnames || []).find(function(ee) {
                  return ee === P.url.hostname;
                }), ne = (e.allowedIframeDomains || []).find(function(ee) {
                  return P.url.hostname === ee || P.url.hostname.endsWith(`.${ee}`);
                });
                D = pe || ne;
              }
            } catch {
              D = !1;
            }
            if (!D) {
              delete m.attribs[M];
              return;
            }
          }
          if (M === "srcset")
            try {
              let D = ka(q);
              if (D.forEach(function(P) {
                z("srcset", P.url) && (P.evil = !0);
              }), D = tr(D, function(P) {
                return !P.evil;
              }), D.length)
                q = Ua(tr(D, function(P) {
                  return !P.evil;
                })), m.attribs[M] = q;
              else {
                delete m.attribs[M];
                return;
              }
            } catch {
              delete m.attribs[M];
              return;
            }
          if (M === "class") {
            const D = h[d], P = h["*"], pe = y[d], ne = s[d], ee = y["*"], Ou = [
              pe,
              ee
            ].concat(ne).filter(function(xi) {
              return xi;
            });
            if (D && P ? q = A(q, er(D, P), Ou) : q = A(q, D || P, Ou), !q.length) {
              delete m.attribs[M];
              return;
            }
          }
          if (M === "style") {
            if (e.parseStyleAttributes)
              try {
                const D = Ra(d + " {" + q + "}", { map: !1 }), P = p(D, e.allowedStyles);
                if (q = v(P), q.length === 0) {
                  delete m.attribs[M];
                  return;
                }
              } catch {
                typeof window < "u" && console.warn('Failed to parse "' + d + " {" + q + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete m.attribs[M];
                return;
              }
            else if (e.allowedStyles)
              throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
          }
          u += " " + M, q && q.length ? u += '="' + H(q, !0) + '"' : e.allowedEmptyAttributes.includes(M) && (u += '=""');
        } else
          delete m.attribs[M];
      }), e.selfClosing.indexOf(d) !== -1 ? u += " />" : (u += ">", m.innerText && !U && !e.textFilter && (u += H(m.innerText), R = !0)), T && (u = i + H(u), i = "");
    },
    ontext: function(d) {
      if (C)
        return;
      const g = b[b.length - 1];
      let m;
      if (g && (m = g.tag, d = g.innerText !== void 0 ? g.innerText : d), e.disallowedTagsMode === "completelyDiscard" && !a(m))
        d = "";
      else if ((e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && (m === "script" || m === "style"))
        u += d;
      else {
        const T = H(d, !1);
        e.textFilter && !R ? u += e.textFilter(T, m) : R || (u += T);
      }
      if (b.length) {
        const T = b[b.length - 1];
        T.text += d;
      }
    },
    onclosetag: function(d, g) {
      if (C)
        if (_--, !_)
          C = !1;
        else
          return;
      const m = b.pop();
      if (!m)
        return;
      if (m.tag !== d) {
        b.push(m);
        return;
      }
      C = e.enforceHtmlBoundary ? d === "html" : !1, E--;
      const T = S[E];
      if (T) {
        if (delete S[E], e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") {
          m.updateParentNodeText();
          return;
        }
        i = u, u = "";
      }
      if (N[E] && (d = N[E], delete N[E]), e.exclusiveFilter && e.exclusiveFilter(m)) {
        u = u.substr(0, m.tagPosition);
        return;
      }
      if (m.updateParentNodeMediaChildren(), m.updateParentNodeText(), // Already output />
      e.selfClosing.indexOf(d) !== -1 || // Escaped tag, closing tag is implied
      g && !a(d) && ["escape", "recursiveEscape"].indexOf(e.disallowedTagsMode) >= 0) {
        T && (u = i, i = "");
        return;
      }
      u += "</" + d + ">", T && (u = i + H(u), i = ""), R = !1;
    }
  }, e.parser);
  return F.write(r), F.end(), u;
  function Y() {
    u = "", E = 0, b = [], S = {}, N = {}, C = !1, _ = 0;
  }
  function H(d, g) {
    return typeof d != "string" && (d = d + ""), e.parser.decodeEntities && (d = d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), g && (d = d.replace(/"/g, "&quot;"))), d = d.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), g && (d = d.replace(/"/g, "&quot;")), d;
  }
  function z(d, g) {
    for (g = g.replace(/[\x00-\x20]+/g, ""); ; ) {
      const U = g.indexOf("<!--");
      if (U === -1)
        break;
      const B = g.indexOf("-->", U + 4);
      if (B === -1)
        break;
      g = g.substring(0, U) + g.substring(B + 3);
    }
    const m = g.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!m)
      return g.match(/^[/\\]{2}/) ? !e.allowProtocolRelative : !1;
    const T = m[1].toLowerCase();
    return oe(e.allowedSchemesByTag, d) ? e.allowedSchemesByTag[d].indexOf(T) === -1 : !e.allowedSchemes || e.allowedSchemes.indexOf(T) === -1;
  }
  function G(d) {
    if (d = d.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), d.startsWith("relative:"))
      throw new Error("relative: exploit attempt");
    let g = "relative://relative-site";
    for (let U = 0; U < 100; U++)
      g += `/${U}`;
    const m = new URL(d, g);
    return {
      isRelativeUrl: m && m.hostname === "relative-site" && m.protocol === "relative:",
      url: m
    };
  }
  function p(d, g) {
    if (!g)
      return d;
    const m = d.nodes[0];
    let T;
    return g[m.selector] && g["*"] ? T = er(
      g[m.selector],
      g["*"]
    ) : T = g[m.selector] || g["*"], T && (d.nodes[0].nodes = m.nodes.reduce(w(T), [])), d;
  }
  function v(d) {
    return d.nodes[0].nodes.reduce(function(g, m) {
      return g.push(
        `${m.prop}:${m.value}${m.important ? " !important" : ""}`
      ), g;
    }, []).join(";");
  }
  function w(d) {
    return function(g, m) {
      return oe(d, m.prop) && d[m.prop].some(function(U) {
        return U.test(m.value);
      }) && g.push(m), g;
    };
  }
  function A(d, g, m) {
    return g ? (d = d.split(/\s+/), d.filter(function(T) {
      return g.indexOf(T) !== -1 || m.some(function(U) {
        return U.test(T);
      });
    }).join(" ")) : d;
  }
}
const Fa = {
  decodeEntities: !0
};
He.defaults = {
  allowedTags: [
    // Sections derived from MDN element categories and limited to the more
    // benign categories.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    // Content sectioning
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    // Text content
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    // Inline text semantics
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    // Table content
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  // Tags that cannot be boolean
  nonBooleanAttributes: [
    "abbr",
    "accept",
    "accept-charset",
    "accesskey",
    "action",
    "allow",
    "alt",
    "as",
    "autocapitalize",
    "autocomplete",
    "blocking",
    "charset",
    "cite",
    "class",
    "color",
    "cols",
    "colspan",
    "content",
    "contenteditable",
    "coords",
    "crossorigin",
    "data",
    "datetime",
    "decoding",
    "dir",
    "dirname",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "fetchpriority",
    "for",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formtarget",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "http-equiv",
    "id",
    "imagesizes",
    "imagesrcset",
    "inputmode",
    "integrity",
    "is",
    "itemid",
    "itemprop",
    "itemref",
    "itemtype",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "name",
    "nonce",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "referrerpolicy",
    "rel",
    "rows",
    "rowspan",
    "sandbox",
    "scope",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "spellcheck",
    "src",
    "srcdoc",
    "srclang",
    "srcset",
    "start",
    "step",
    "style",
    "tabindex",
    "target",
    "title",
    "translate",
    "type",
    "usemap",
    "value",
    "width",
    "wrap",
    // Event handlers
    "onauxclick",
    "onafterprint",
    "onbeforematch",
    "onbeforeprint",
    "onbeforeunload",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onlanguagechange",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmessage",
    "onmessageerror",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onrejectionhandled",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onstorage",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onunhandledrejection",
    "onunload",
    "onvolumechange",
    "onwaiting",
    "onwheel"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    // We don't currently allow img itself by default, but
    // these attributes would make sense if we did.
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  allowedEmptyAttributes: [
    "alt"
  ],
  // Lots of these won't come up by default because we don't allow them
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  // URL schemes we permit
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1,
  parseStyleAttributes: !0
};
He.simpleTransform = function(r, e, t) {
  return t = t === void 0 ? !0 : t, e = e || {}, function(u, i) {
    let n;
    if (t)
      for (n in e)
        i[n] = e[n];
    else
      i = e;
    return {
      tagName: r,
      attribs: i
    };
  };
};
const Va = /* @__PURE__ */ vi(Ha), za = [
  "address",
  "article",
  "aside",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "main",
  "blockquote",
  "p",
  "pre",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "br",
  "br/",
  "cite",
  "code",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u"
];
function Ga(r) {
  return Va(r, {
    allowedTags: za,
    disallowedTagsMode: "discard",
    allowedAttributes: { span: ["class", "id", "role", "aria-label", "tabindex"] },
    selfClosing: ["br"],
    allowedSchemes: ["http"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [],
    allowProtocolRelative: !0,
    enforceHtmlBoundary: !1,
    parseStyleAttributes: !0
  });
}
var ge, $e, Fe, Ve, ze, ye, St, bi, Ee, ht, Ge, su, Et, mi, Tt, gi;
class pi extends HTMLElement {
  constructor({ min: t, max: u, step: i, value: n, marks: a = [], className: l, input: o, onChange: f }) {
    super();
    K(this, St);
    K(this, Ee);
    K(this, Ge);
    K(this, Et);
    K(this, Tt);
    K(this, ge, void 0);
    K(this, $e, void 0);
    K(this, Fe, void 0);
    K(this, Ve, void 0);
    K(this, ze, void 0);
    K(this, ye, void 0);
    this.min = t, this.max = u, this.step = i, this.value = n || t, this.marks = a, this.onChange = f, fe(this, ye, o), l && (this.className = l);
  }
  connectedCallback() {
    this.setAttribute("tabindex", "0"), fe(this, ze, be("div", { class: "label" }, this)), fe(this, ge, be("div", { class: "track" }, this)), fe(this, $e, be("div", { class: "active-path" }, ue(this, ge))), fe(this, Fe, be("div", { class: "puller" }, ue(this, ge))), fe(this, Ve, be("div", { class: "marks" }, this)), fe(this, ye, ue(this, ye) || be("input", { type: "hidden" }, this));
    for (let t of this.marks) {
      const u = be("span", { class: "mark" }, ue(this, Ve));
      u.textContent = t;
    }
    this.addEventListener("click", ae(this, Ge, su)), this.addEventListener("mousemove", ae(this, Et, mi)), this.addEventListener("keydown", ae(this, Tt, gi)), ae(this, Ee, ht).call(this, this.value);
  }
  setLabel(t) {
    ue(this, ze).innerHTML = Ga(t);
  }
}
ge = new WeakMap(), $e = new WeakMap(), Fe = new WeakMap(), Ve = new WeakMap(), ze = new WeakMap(), ye = new WeakMap(), St = new WeakSet(), bi = function() {
  const t = (this.value - this.min) / (this.max - this.min) * 100;
  ue(this, $e).style.width = t + "%", ue(this, Fe).style.left = "calc(" + t + "% - 6px)";
}, Ee = new WeakSet(), ht = function(t) {
  var u;
  this.value = Math.min(Math.max(t, this.min), this.max), ae(this, St, bi).call(this), ue(this, ye).value = String(this.value), (u = this.onChange) == null || u.call(this, this.value, this);
}, Ge = new WeakSet(), su = function(t) {
  t.preventDefault();
  const u = ue(this, ge).getBoundingClientRect();
  let n = (t.pageX - u.left) / u.width * (this.max - this.min) + this.min;
  n = Math.round(n / this.step) * this.step, ae(this, Ee, ht).call(this, n);
}, Et = new WeakSet(), mi = function(t) {
  t.buttons === 1 && ae(this, Ge, su).call(this, t);
}, Tt = new WeakSet(), gi = function(t) {
  let u = this.value;
  t.key === "ArrowLeft" || t.key === "ArrowDown" ? u = Math.max(this.value - this.step, this.min) : (t.key === "ArrowRight" || t.key === "ArrowUp") && (u = Math.min(this.value + this.step, this.max)), ae(this, Ee, ht).call(this, u);
};
customElements.define("stx-slider", pi);
let yi;
const Wa = function() {
  const r = document.getElementsByClassName("hs_my_budget_is_100_000_or_more")[0], e = r == null ? void 0 : r.getElementsByClassName("input")[0], t = new pi({
    min: 50,
    max: 500,
    step: 10,
    value: 200,
    marks: ["50k", "500k"],
    input: e,
    className: "slider",
    onChange: (u, i) => {
      i.setLabel(`My budget is <em>&euro; ${u}K</em> or more`);
    }
  });
  e && e.after(t);
}, Xa = function() {
  document.querySelector("form") && (Wa(), clearInterval(yi));
};
window.addEventListener("DOMContentLoaded", () => {
  yi = setInterval(() => {
    Xa();
  }, 100);
});
