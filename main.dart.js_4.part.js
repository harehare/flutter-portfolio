self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H={
aeR:function(){var x=0,w=P.a6(y.z)
var $async$aeR=P.X(function(d,e){if(d===1)return P.a3(e,w)
while(true)switch(x){case 0:if(!$.aef){$.aef=!0
C.bd.M0(window,new H.abJ())}return P.a4(null,w)}})
return P.a5($async$aeR,w)},
abJ:function abJ(){},
abI:function abI(){}},J,P={
asx:function(){throw H.a(P.B("_Namespace"))},
asC:function(d){throw H.a(P.B("RandomAccessFile"))},
au4:function(d){throw H.a(P.B("_isDirectIOCapableTypedList"))},
a9Y:function(d){return y.j.b(d)&&!J.d(J.aC(d,0),0)},
a9O:function(d,e,f){var x=J.a9(d)
switch(x.i(d,0)){case 1:return new P.eI(!1,null,null,e+": "+H.c(f))
case 2:return new P.l_(e,f,new P.Fd(x.i(d,2),x.i(d,1)))
case 3:return new P.l_("File closed",f,null)
default:return new P.rl("Unknown error")}},
atF:function(d,e,f){var x,w
if(P.au4(d))return new P.JV(d,e)
x=f-e
w=new Uint8Array(x)
C.D.aH(w,0,x,d,e)
return new P.JV(w,0)},
aoX:function(d){var x
P.agI()
P.ed(d,"path")
x=P.agv(C.c2.bm(d))
return new P.KI(d,x)},
api:function(d){var x
P.agI()
P.ed(d,"path")
x=P.agv(C.c2.bm(d))
return new P.yy(d,x)},
aph:function(d,e,f){return new P.l_(d,e,f)},
asi:function(){return P.asx()},
aiI:function(d,e){e[0]=P.asi()},
agv:function(d){var x,w
d.toString
if(!C.D.gN(d)&&!J.d(C.D.gC(d),0)){x=d.length
w=new Uint8Array(x+1)
C.D.ck(w,0,x,d)
return w}else return d},
agI:function(){var x=$.S.i(0,$.amG())
return x==null?null:x},
Fd:function Fd(d,e){this.a=d
this.b=e},
JV:function JV(d,e){this.a=d
this.b=e},
KI:function KI(d,e){this.a=d
this.b=e},
mV:function mV(d){this.a=d},
l_:function l_(d,e,f){this.a=d
this.b=e
this.c=f},
yy:function yy(d,e){this.a=d
this.b=e},
a5o:function a5o(d){this.a=d},
a5n:function a5n(d){this.a=d},
a5q:function a5q(d,e,f){this.a=d
this.b=e
this.c=f},
a5p:function a5p(d,e,f){this.a=d
this.b=e
this.c=f},
oq:function oq(d,e){var _=this
_.a=d
_.b=!1
_.c=null
_.d=!1
_.e=e
_.f=!1},
a7l:function a7l(d){this.a=d},
a7n:function a7n(d,e,f){this.a=d
this.b=e
this.c=f},
a7m:function a7m(d){this.a=d},
TV:function TV(){},
aw1:function(d,e){var x=$.PC
return x.a.Xa(e,d).b4(0,new P.abk(),y.H)},
abk:function abk(){},
arN:function(d){var x,w,v=0,u=null
try{x=P.ki(d,v,u)
return x}catch(w){if(y.Y.b(H.V(w)))return null
else throw w}}},W,Y,F={V3:function V3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},X,L,M,U,R,G,S,Z={
f9:function(d){var x
if(d==="regular"||d==="italic")x=3
else x=C.f.bL(P.dQ(H.c3(d,"italic",""),null),100)-1
x=C.rF[x]
return new Z.pi(x,C.c.D(d,"italic")?C.mQ:C.fr)},
pi:function pi(d,e){this.a=d
this.b=e},
Xr:function Xr(d,e){this.c=d
this.a=e},
abl:function(d){var x=0,w=P.a6(y.H),v,u,t,s,r
var $async$abl=P.X(function(e,f){if(e===1)return P.a3(f,w)
while(true)switch(x){case 0:r=d.Ka()
if($.ajY.D(0,r)){x=1
break}$.ajY.E(0,r)
u=new O.Us(r,H.b([],y.m))
t=Z.a9W(r,d.d)
u.a05(t)
x=3
return P.ac(u.ut(0),$async$abl)
case 3:s=y.X
$.hO.iB(P.ax(["type","fontsChange"],s,s))
case 1:return P.a4(v,w)}})
return P.a5($async$abl,w)},
atg:function(d,e){var x,w,v,u,t
for(x=e.gH(e),w=null,v=null;x.n();){u=x.gu(x)
t=Z.atk(d,u)
if(w==null||t<w){v=u
w=t}}return v},
a9W:function(d,e){var x=0,w=P.a6(y.r),v,u,t,s
var $async$a9W=P.X(function(f,g){if(f===1)return P.a3(g,w)
while(true)switch(x){case 0:s=P.arN(e)
if(s==null)throw H.a(P.c1("Invalid fontUrl: "+H.c(e)))
x=3
return P.ac($.amZ().rS("GET",s,null),$async$a9W)
case 3:u=g
if(u.b===200){t=u.x
Z.aaw(d,t)
v=H.jV(t.buffer,0,null)
x=1
break}else throw H.a(P.c1("Failed to load font with url: "+H.c(e)))
case 1:return P.a4(v,w)}})
return P.a5($async$a9W,w)},
aab:function(){var x=0,w=P.a6(y.X),v,u
var $async$aab=P.X(function(d,e){if(d===1)return P.a3(e,w)
while(true)switch(x){case 0:x=3
return P.ac(Q.aaZ(),$async$aab)
case 3:u=e
v=u.gd4(u)
x=1
break
case 1:return P.a4(v,w)}})
return P.a5($async$aab,w)},
aaa:function(d){var x=0,w=P.a6(y.O),v,u,t
var $async$aaa=P.X(function(e,f){if(e===1)return P.a3(f,w)
while(true)switch(x){case 0:u=P
t=H
x=3
return P.ac(Z.aab(),$async$aaa)
case 3:v=u.api(t.c(f)+"/"+d+".ttf")
x=1
break
case 1:return P.a4(v,w)}})
return P.a5($async$aaa,w)},
aaw:function(d,e){var x=0,w=P.a6(y.O),v
var $async$aaw=P.X(function(f,g){if(f===1)return P.a3(g,w)
while(true)switch(x){case 0:x=3
return P.ac(Z.aaa(d),$async$aaw)
case 3:v=g.a7i(e)
x=1
break
case 1:return P.a4(v,w)}})
return P.a5($async$aaw,w)},
atk:function(d,e){var x
if(d.k(0,e))return 0
x=Math.abs(d.a.a-e.a.a)
return d.b!==e.b?x+2:x}},E,T={Yr:function Yr(){}},K,D,N,B={
pj:function(d){var x,w,v,u,t=P.ax([Z.f9("200"),"http://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc9yAv5qWVAgVol-.ttf",Z.f9("200italic"),"http://fonts.gstatic.com/s/nunitosans/v5/pe01MImSLYBIv1o4X1M8cce4GxZrU1QCU5l-06Y.ttf",Z.f9("300"),"http://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8WAf5qWVAgVol-.ttf",Z.f9("300italic"),"http://fonts.gstatic.com/s/nunitosans/v5/pe01MImSLYBIv1o4X1M8cce4G3JoU1QCU5l-06Y.ttf",Z.f9("regular"),"http://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cfe6Kdpickwp.ttf",Z.f9("italic"),"http://fonts.gstatic.com/s/nunitosans/v5/pe0oMImSLYBIv1o4X1M8cce4I95Ad1wpT5A.ttf",Z.f9("600"),"http://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc9iB_5qWVAgVol-.ttf",Z.f9("600italic"),"http://fonts.gstatic.com/s/nunitosans/v5/pe01MImSLYBIv1o4X1M8cce4GwZuU1QCU5l-06Y.ttf",Z.f9("700"),"http://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBv5qWVAgVol-.ttf",Z.f9("700italic"),"http://fonts.gstatic.com/s/nunitosans/v5/pe01MImSLYBIv1o4X1M8cce4G2JvU1QCU5l-06Y.ttf",Z.f9("800"),"http://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8aBf5qWVAgVol-.ttf",Z.f9("800italic"),"http://fonts.gstatic.com/s/nunitosans/v5/pe01MImSLYBIv1o4X1M8cce4G35sU1QCU5l-06Y.ttf",Z.f9("900"),"http://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8-BP5qWVAgVol-.ttf",Z.f9("900italic"),"http://fonts.gstatic.com/s/nunitosans/v5/pe01MImSLYBIv1o4X1M8cce4G1ptU1QCU5l-06Y.ttf"],y.n,y.X)
d=d.a1P(null,null,null)
x=d.x
if(x==null)x=C.J
w=d.y
if(w==null)w=C.fr
v=Z.atg(new Z.pi(x,w),t.gag(t))
u=new F.V3("NunitoSans",v.a,v.b,t.i(0,v))
Z.abl(u)
return d.a1N(u.Ka(),H.b(["NunitoSans"],y.i))}},O={Us:function Us(d,e){this.a=d
this.b=!1
this.c=e},Ut:function Ut(){},Uv:function Uv(d){this.a=d},Uu:function Uu(d){this.a=d}},V,Q={
aaZ:function(){var x=0,w=P.a6(y.l),v,u
var $async$aaZ=P.X(function(d,e){if(d===1)return P.a3(e,w)
while(true)switch(x){case 0:if($.ajZ)$.ajZ=!1
x=3
return P.ac($.alL().Bo(),$async$aaZ)
case 3:u=e
if(u==null){v=null
x=1
break}v=P.aoX(u)
x=1
break
case 1:return P.a4(v,w)}})
return P.a5($async$aaZ,w)}},A
a.setFunctionNamesIfNecessary([H,P,F,Z,T,B,O,Q])
C=c[0]
H=a.updateHolder(c[1],H)
J=c[2]
P=a.updateHolder(c[3],P)
W=c[4]
Y=c[5]
F=a.updateHolder(c[6],F)
X=c[7]
L=c[8]
M=c[9]
U=c[10]
R=c[11]
G=c[12]
S=c[13]
Z=a.updateHolder(c[14],Z)
E=c[15]
T=a.updateHolder(c[16],T)
K=c[17]
D=c[18]
N=c[19]
B=a.updateHolder(c[20],B)
O=a.updateHolder(c[21],O)
V=c[22]
Q=a.updateHolder(c[23],Q)
A=c[24]
P.Fd.prototype={
j:function(d){var x,w=this.a
if(w.length!==0){w="OS Error: "+w
x=this.b
if(x!==-1)w=w+", errno = "+J.bH(x)}else{w=this.b
w=w!==-1?"OS Error: errno = "+J.bH(w):"OS Error"}return w.charCodeAt(0)==0?w:w},
$iba:1}
P.JV.prototype={}
P.KI.prototype={
gd4:function(d){return this.a},
j:function(d){return"Directory: '"+H.c(this.a)+"'"},
$iagd:1}
P.mV.prototype={}
P.l_.prototype={
j:function(d){var x,w=this,v="FileSystemException",u=w.a
if(u.length!==0){u=v+(": "+u)
x=w.b
if(x!=null)u+=", path = '"+x+"'"
x=w.c
if(x!=null)u+=" ("+x.j(0)+")"}else{u=w.c
if(u!=null){u=v+(": "+u.j(0))
x=w.b
if(x!=null)u+=", path = '"+x+"'"}else{u=w.b
u=u!=null?v+(": "+u):v}}return u.charCodeAt(0)==0?u:u},
$iba:1}
P.yy.prototype={
a5G:function(d,e){if(e!==C.yz&&e!==C.ri&&e!==C.yA&&e!==C.yB&&e!==C.yC)return P.uG(new P.eI(!1,null,null,"Invalid file mode for this operation"),null,y.q)
return P.aiI(5,[null,this.b,e.a]).b4(0,new P.a5o(this),y.q)},
An:function(d){return P.aiI(12,[null,this.b]).b4(0,new P.a5n(this),y.S)},
a7j:function(d,e,f){return this.a5G(0,f).b4(0,new P.a5q(this,d,!1),y.L)},
a7i:function(d){return this.a7j(d,!1,C.ri)},
j:function(d){return"File: '"+H.c(this.a)+"'"},
$ipd:1}
P.oq.prototype={
gH4:function(){return this.d?this.c:H.h(H.G("_resourceInfo"))},
aD:function(d){return this.Fy(7,[null],!0).b4(0,new P.a7l(this),y.H)},
a7k:function(d,e,f){var x,w,v,u,t={}
t.a=f
P.ed(d,"buffer")
P.ed(e,"start")
f=t.a=P.dm(e,f,d.length)
if(f===e)return P.d2(this,y.q)
t.b=null
try{w=t.b=P.atF(d,e,f)}catch(v){x=H.V(v)
t=P.uG(x,null,y.q)
return t}u=P.ah(4,null,!1,y.z)
u[0]=null
u[1]=w.a
w=w.b
u[2]=w
u[3]=f-(e-w)
return this.Fx(22,u).b4(0,new P.a7n(t,this,e),y.q)},
An:function(d){return this.Fx(11,[null]).b4(0,new P.a7m(this),y.S)},
YJ:function(){return this.e.a7m()},
Fy:function(d,e,f){var x=this,w=null
if(x.f)return P.uG(new P.l_("File closed",x.a,w),w,y.z)
if(x.b)return P.uG(new P.l_("An async operation is currently pending",x.a,w),w,y.z)
if(f)x.f=!0
x.b=!0
e[0]=x.YJ()},
Fx:function(d,e){return this.Fy(d,e,!1)},
$iwt:1}
P.TV.prototype={}
O.Us.prototype={
a05:function(d){if(this.b)throw H.a(P.a2("FontLoader is already loaded"))
this.c.push(d.b4(0,new O.Ut(),y.p))},
ut:function(d){var x=0,w=P.a6(y.H),v=this,u,t
var $async$ut=P.X(function(e,f){if(e===1)return P.a3(f,w)
while(true)switch(x){case 0:if(v.b)throw H.a(P.a2("FontLoader is already loaded"))
v.b=!0
u=v.c
t=H.R(u).h("a8<1,aa<~>>")
x=2
return P.ac(P.uH(P.aq(new H.a8(u,new O.Uv(v),t),!0,t.h("aJ.E")),y.H),$async$ut)
case 2:return P.a4(null,w)}})
return P.a5($async$ut,w)}}
F.V3.prototype={
Ka:function(){var x=new Z.pi(this.b,this.c).j(0)
return this.a+"_"+x}}
Z.pi.prototype={
j:function(d){var x,w=this.a.a,v=w===3,u=v?"":(w+1)*100
w=H.c3(this.b.b,"FontStyle.","")
x=C.c.AW(w,"normal",v?"regular":"")
return H.c(u)+x},
gv:function(d){return P.a1(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k:function(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.O(e)!==H.C(x))return!1
return e.a===x.a&&e.b===x.b}}
T.Yr.prototype={
Bo:function(){throw H.a(P.bS("getApplicationDocumentsPath() has not been implemented."))}}
Z.Xr.prototype={
Bo:function(){return this.c.lP("getApplicationDocumentsDirectory",null,!1,y.X)}}
var z=a.updateTypes(["aa<k>()","oq(@)","aa<pd>(wt)","pd/(wt)","aa<~>()"])
H.abJ.prototype={
$1:function(d){$.aef=!1
$.bA().hV("flutter/system",$.amD(),new H.abI())},
$S:120}
H.abI.prototype={
$1:function(d){},
$S:14}
P.a5o.prototype={
$1:function(d){if(P.a9Y(d))throw H.a(P.a9O(d,"Cannot open file",this.a.a))
return new P.oq(this.a.a,P.asC(d))},
$S:z+1}
P.a5n.prototype={
$1:function(d){if(P.a9Y(d))throw H.a(P.a9O(d,"Cannot retrieve length of file",this.a.a))
return d},
$S:82}
P.a5q.prototype={
$1:function(d){var x=this.b
return d.a7k(x,0,x.length).b4(0,new P.a5p(this.a,this.c,d),y.L).eR(d.gkG(d))},
$S:z+2}
P.a5p.prototype={
$1:function(d){return this.a},
$S:z+3}
P.a7l.prototype={
$1:function(d){var x,w=J.hv(d)
if(w.k(d,-1))throw H.a(P.aph("Cannot close file",this.a.a,null))
x=this.a
w=x.f||w.k(d,0)
x.f=w
if(w){w=x.gH4()
$.ash.A(0,w.b)}},
$S:3}
P.a7n.prototype={
$1:function(d){var x,w,v,u,t=this
if(P.a9Y(d))throw H.a(P.a9O(d,"writeFrom failed",t.b.a))
x=t.b
w=x.gH4()
v=t.a
u=v.a
u.toString
w.d+=u-(t.c-v.b.b);++w.f
w.x=$.amq()+C.f.bL($.amr().gK_(),1000)
return x},
$S:z+1}
P.a7m.prototype={
$1:function(d){if(P.a9Y(d))throw H.a(P.a9O(d,"length failed",this.a.a))
return d},
$S:82}
P.abk.prototype={
$1:function(d){return H.aeR()},
$S:363}
O.Ut.prototype={
$1:function(d){return H.dj(d.buffer,d.byteOffset,d.byteLength)},
$S:364}
O.Uv.prototype={
$1:function(d){return d.b4(0,new O.Uu(this.a),y.H)},
$S:365}
O.Uu.prototype={
$1:function(d){return P.aw1(d,this.a.a)},
$S:366};(function installTearOffs(){var x=a._instance_0i
x(P.yy.prototype,"gl","An",0)
var w
x(w=P.oq.prototype,"gkG","aD",4)
x(w,"gl","An",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.bV,[H.abJ,H.abI,P.a5o,P.a5n,P.a5q,P.a5p,P.a7l,P.a7n,P.a7m,P.abk,O.Ut,O.Uv,O.Uu])
x(P.w,[P.Fd,P.JV,P.TV,P.mV,P.l_,P.oq,O.Us,F.V3,Z.pi])
x(P.TV,[P.KI,P.yy])
w(T.Yr,E.G1)
w(Z.Xr,T.Yr)})()
H.fA(b.typeUniverse,JSON.parse('{"fJ":"Y","fH":"q","h9":"q","he":"q","fF":"U","h_":"U","hr":"c7","fM":"a_","hg":"M","fT":"M","h1":"cH","hm":"c0","fQ":"cN","fG":"bW","hf":"cx","fP":"bm","hi":"bm","h6":"d7","h3":"d4","h2":"d3","fS":"aY","fN":"cQ","fL":"d6","Fd":{"ba":[]},"KI":{"agd":[]},"l_":{"ba":[]},"yy":{"pd":[]},"oq":{"wt":[]}}'))
0
var y=(function rtii(){var x=H.L
return{L:x("pd"),Y:x("f6"),m:x("p<aa<cW>>"),i:x("p<e*>"),j:x("v<@>"),q:x("wt"),p:x("cW"),z:x("@"),S:x("k"),r:x("bt*"),l:x("agd*"),O:x("pd*"),n:x("pi*"),X:x("e*"),H:x("~")}})();(function constants(){C.yz=new P.mV(0)
C.ri=new P.mV(1)
C.yA=new P.mV(2)
C.yB=new P.mV(3)
C.yC=new P.mV(4)})();(function staticFields(){$.aef=!1
$.ash=P.r(y.S,H.L("aye"))
$.ajY=P.bN(y.X)
$.ajZ=!0})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazyOld
x($,"ayX","amD",function(){return new H.Eb().bS(P.ax(["type","fontsChange"],H.L("e"),y.z))})
x($,"ayk","amr",function(){var v=P.aia()
v.nm(0)
return v})
x($,"ayj","amq",function(){return P.aoO().a})
x($,"az2","amG",function(){return new P.w()})
w($,"azC","amZ",function(){return U.aow()})
w($,"axp","alM",function(){return new P.w()})
w($,"axo","alL",function(){return new Z.Xr(new A.pR("plugins.flutter.io/path_provider",C.jB),$.alM())})})()}
$__dart_deferred_initializers__["A/aLjvqu16SSMeIKaEqzBDgDcYc="] = $__dart_deferred_initializers__.current