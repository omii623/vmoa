import './polyfills.server.mjs';
import{a as K}from"./chunk-R4VMMYCY.mjs";import{a as R,b as _,c as Z,d as $}from"./chunk-6NIIZQVP.mjs";import"./chunk-Q437OZY6.mjs";import{a as j,d as T,e as A,f as B,h as f,i as k,ia as q,j as G,ka as H,l as V,n as z,p as J}from"./chunk-YRSEAR4L.mjs";import"./chunk-GTSSCL6B.mjs";import{n as D,p as v}from"./chunk-PCDBYPRX.mjs";import{$ as c,Ab as O,Dc as N,Ec as E,Kb as a,Lb as d,Ob as S,Pb as y,Za as l,_ as C,_a as b,da as M,ja as F,ka as u,ma as I,mb as P,ob as h,tb as r,ub as n,vb as s,zc as w}from"./chunk-4YZNCJGU.mjs";import"./chunk-FDUMXABO.mjs";import"./chunk-3SZVCSKE.mjs";import"./chunk-H6KHSOBK.mjs";var L=(()=>{let e=class e{constructor(o){this.afs=o}create(o){return this.afs.collection("BloodPressures").doc().set(o)}getAll(o){return this.afs.collection("BloodPressures",i=>i.where("id","==",o).orderBy("date")).valueChanges()}update(){}delete(){}};e.\u0275fac=function(i){return new(i||e)(M(K))},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Q=(()=>{let e=class e{transform(o,...i){if(o===void 0)return"";let m=new Date(o).getTimezoneOffset()*6e4,x=new Date(o).getTime()-m;return new Date(x).toISOString().replace("Z","").replace("T"," ")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=I({name:"dateFormat",type:e,pure:!0});let t=e;return t})();function ee(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),n(),r(3,"td"),a(4),n(),r(5,"td"),a(6),n(),r(7,"td"),a(8),S(9,"dateFormat"),n()()),t&2){let p=e.$implicit;l(2),d(p.sys),l(2),d(p.dia),l(2),d(p.pulse),l(2),d(y(9,4,p.date))}}var U=(()=>{let e=class e{constructor(o,i){this.router=o,this.bloodService=i,this.bloodPressures=new B({sys:new f(""),dia:new f(""),pulse:new f("")})}onSubmit(){let o=JSON.parse(localStorage.getItem("user"));console.log(this.bloodPressures.value);let i={id:o.uid,sys:this.bloodPressures.get("sys")?.value,dia:this.bloodPressures.get("dia")?.value,pulse:this.bloodPressures.get("pulse")?.value,date:new Date().getTime()};this.bloodService.create(i).then(m=>{console.log("Blood pressure added")}).catch(m=>{console.log(m)})}ngOnInit(){let o=JSON.parse(localStorage.getItem("user"));this.data=this.bloodService.getAll(o.uid)}};e.\u0275fac=function(i){return new(i||e)(b(D),b(L))},e.\u0275cmp=F({type:e,selectors:[["app-data"]],decls:31,vars:4,consts:[[1,"blood-form"],[3,"ngSubmit","formGroup"],["matInput","","type","number","title","sys","placeholder","sys","formControlName","sys"],["matInput","","type","number","title","dia","placeholder","dia","formControlName","dia"],["matInput","","type","number","title","pulse","placeholder","pulse","formControlName","pulse"],["mat-raised-button","","type","submit",1,"btn"],[4,"ngFor","ngForOf"]],template:function(i,m){i&1&&(r(0,"div",0)(1,"h2"),a(2,"Add your blood values"),n(),r(3,"form",1),O("ngSubmit",function(){return m.onSubmit()}),r(4,"mat-form-field"),s(5,"input",2),n(),s(6,"br"),r(7,"mat-form-field"),s(8,"input",3),n(),s(9,"br"),r(10,"mat-form-field"),s(11,"input",4),n(),s(12,"br"),r(13,"button",5),a(14,"Add values"),n()(),s(15,"br"),r(16,"div")(17,"table")(18,"thead")(19,"tr")(20,"th"),a(21,"sys"),n(),r(22,"th"),a(23,"dia"),n(),r(24,"th"),a(25,"pulse"),n(),r(26,"th"),a(27,"date"),n()()(),r(28,"tbody"),P(29,ee,10,6,"tr",6),S(30,"async"),n()()()()),i&2&&(l(3),h("formGroup",m.bloodPressures),l(26),h("ngForOf",y(30,2,m.data)))},dependencies:[w,k,j,G,T,A,V,z,R,Z,q,N,Q],styles:[".blood-form[_ngcontent-%COMP%]{padding:2em;margin:auto 0}.blood-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-block;background:red;border:1px solid darken(red,5%);padding:.5em 2em;color:#000;margin-right:.5em;box-shadow:inset 0 1px #fffc}table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;text-align:left;border:1px solid #ccc}th[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#333;border-top:2px solid #666;border-bottom:2px solid #666}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}"]});let t=e;return t})();var te=[{path:"",component:U}],W=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=c({imports:[v.forChild(te),v]});let t=e;return t})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=c({imports:[E,W,J,_,$,H]});let t=e;return t})();export{Ie as DataModule};