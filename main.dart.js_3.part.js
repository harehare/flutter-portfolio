self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P={
azn:function(d,e){var w=P.awC(new P.ae1(d,e),x.s)
return w},
awC:function(d,e){var w=new P.a1($.S,e.h("a1<0>")),v=d.$1(new P.abT(new P.AF(w,e.h("AF<0>")),e))
if(v!=null)throw H.b(P.bG(v))
return w},
ae1:function ae1(d,e){this.a=d
this.b=e},
abT:function abT(d,e){this.a=d
this.b=e}},W,Y,F,M={dz:function dz(){},Wy:function Wy(d,e,f){this.a=d
this.b=e
this.c=f},Wz:function Wz(d,e,f){this.a=d
this.b=e
this.c=f},Wv:function Wv(d,e){this.a=d
this.b=e},Wt:function Wt(d){this.a=d},Wu:function Wu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},Ws:function Ws(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Ww:function Ww(d){this.a=d},Wx:function Wx(d,e){this.a=d
this.b=e},a6y:function a6y(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=e}},U={
axD:function(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return C.qo
switch(d){case C.ja:w=f
v=e
break
case C.jb:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new P.Q(s*t/q,t):new P.Q(u,q*u/s)
v=e
break
case C.nI:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new P.Q(s,s*t/u):new P.Q(q*u/t,q)
w=f
break
case C.nJ:q=e.a
u=f.a
t=q*f.b/u
v=new P.Q(q,t)
w=new P.Q(u,t*u/q)
break
case C.nK:u=f.b
t=q*f.a/u
v=new P.Q(t,q)
w=new P.Q(t*u/q,u)
break
case C.nL:v=new P.Q(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case C.fw:r=e.a/q
u=f.b
w=q>u?new P.Q(u*r,u):e
q=f.a
if(w.a>q)w=new P.Q(q,q/r)
v=e
break
default:v=null
w=null}return new U.DX(v,w)},
jK:function jK(d){this.b=d},
DX:function DX(d,e){this.a=d
this.b=e}},R,L={
afl:function(d,e,f,g,h){var w=new L.Fr(h,g,H.a([],x.y),H.a([],x.b))
w.U7(d,e,f,g,h)
return w},
fj:function fj(d,e,f){this.a=d
this.b=e
this.c=f},
iK:function iK(d,e){this.a=d
this.b=e},
WA:function WA(){this.b=this.a=null},
Er:function Er(d){this.a=d},
nz:function nz(){},
WB:function WB(){},
WC:function WC(){},
Fr:function Fr(d,e,f,g){var _=this
_.y=null
_.z=d
_.Q=e
_.cy=_.cx=_.ch=null
_.db=0
_.dx=null
_.dy=!1
_.a=f
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=g},
Ys:function Ys(d,e){this.a=d
this.b=e},
Yt:function Yt(d,e){this.a=d
this.b=e},
Yr:function Yr(d){this.a=d},
Lu:function Lu(){},
Lw:function Lw(){},
Lv:function Lv(){}},X={
anA:function(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b0.gP(b0))return
w=b0.a
v=b0.c-w
u=b0.b
t=b0.d-u
s=new P.Q(v,t)
r=a7.gas(a7)
q=a7.gal(a7)
if(a5==null)a5=C.fw
p=U.axD(a5,new P.Q(r,q).hQ(0,b2),s)
o=p.a.a9(0,b2)
n=p.b
if(b1!==C.bt&&n.k(0,s))b1=C.bt
m=new H.aT(new H.aW())
m.sq2(!1)
if(a2!=null)m.sa4f(a2)
m.sBc(a4)
m.sBB(a8)
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=d.a
t=w+(k+(a6?-t:t)*k)
u+=i+d.b*i
h=new P.w(t,u,t+l,u+j)
g=b1!==C.bt||a6
if(g)a0.c8(0)
u=b1===C.bt
if(!u)a0.jK(0,b0)
if(a6){f=-(w+v/2)
a0.ar(0,-f,0)
a0.dC(0,-1,1)
a0.ar(0,f,0)}e=d.a73(o,new P.w(0,0,r,q))
if(u)a0.l4(0,a7,e,h,m)
else for(w=X.amn(b0,h,b1),w=new P.dV(w.a(),w.$ti.h("dV<1>"));w.n();)a0.l4(0,a7,e,w.gu(w),m)
if(g)a0.c5(0)},
amn:function(d,e,f){return P.dG(function(){var w=d,v=e,u=f
var t=0,s=1,r,q,p,o,n,m,l,k,j,i,h,g,a0,a1
return function $async$amn(a2,a3){if(a2===1){r=a3
t=s}while(true)switch(t){case 0:k=v.c
j=v.a
i=k-j
h=v.d
g=v.b
a0=h-g
a1=u!==C.qW
if(!a1||u===C.qX){q=C.d.e0((w.a-j)/i)
p=C.d.hu((w.c-k)/i)}else{q=0
p=0}if(!a1||u===C.qY){o=C.d.e0((w.b-g)/a0)
n=C.d.hu((w.d-h)/a0)}else{o=0
n=0}m=q
case 2:if(!(m<=p)){t=4
break}k=m*i,l=o
case 5:if(!(l<=n)){t=7
break}t=8
return v.bV(new P.m(k,l*a0))
case 8:case 6:++l
t=5
break
case 7:case 3:++m
t=2
break
case 4:return P.dE()
case 1:return P.dF(r)}}},x.D)},
pU:function pU(d){this.b=d}},G,S,Z,E,T,K,D={nW:function nW(d,e){this.a=d
this.b=e},YI:function YI(d){this.a=d}},N,B,O,V,Q,A
a.setFunctionNamesIfNecessary([P,M,U,L,X,D])
C=c[0]
H=c[1]
J=c[2]
P=a.updateHolder(c[3],P)
W=c[4]
Y=c[5]
F=c[6]
M=a.updateHolder(c[7],M)
U=a.updateHolder(c[8],U)
R=c[9]
L=a.updateHolder(c[10],L)
X=a.updateHolder(c[11],X)
G=c[12]
S=c[13]
Z=c[14]
E=c[15]
T=c[16]
K=c[17]
D=a.updateHolder(c[18],D)
N=c[19]
B=c[20]
O=c[21]
V=c[22]
Q=c[23]
A=c[24]
D.nW.prototype={
qh:function(d){return new O.bZ(this,x.B)},
q6:function(d,e,f){var w=null,v=P.akE(w,w,w,x.h)
return L.afl(new P.hu(v,H.q(v).h("hu<1>")),this.a_0(e,f,v),e.a,w,e.b)},
a_0:function(d,e,f){return P.azn(P.a4N().ak(d.a),new D.YI(f))},
k:function(d,e){if(e==null)return!1
if(J.U(e)!==H.A(this))return!1
return e instanceof D.nW&&e.a===this.a&&e.b===this.b},
gt:function(d){return P.a0(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i:function(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
U.jK.prototype={
i:function(d){return this.b}}
U.DX.prototype={}
X.pU.prototype={
i:function(d){return this.b}}
M.dz.prototype={
ak:function(d){var w=new L.WA()
this.VI(d,new M.Wy(this,d,w),new M.Wz(this,w,d))
return w},
VI:function(d,e,f){var w,v=null,u={}
u.a=null
u.b=!1
w=new M.Wv(u,f)
$.S.M4(new P.P9(new M.Wt(w),v,v,v,v,v,v,v,v,v,v,v,v)).ko(new M.Wu(u,this,d,w,e))},
qE:function(d,e,f,g){var w
if(e.a!=null){$.j2.dm$.NM(0,f,new M.Ww(e),g)
return}w=$.j2.dm$.NM(0,f,new M.Wx(this,f),g)
if(w!=null)e.Dw(w)},
i:function(d){return"ImageConfiguration()"}}
M.a6y.prototype={}
L.fj.prototype={
dI:function(d){return new L.fj(this.a.dI(0),this.b,this.c)},
p:function(d){this.a.p(0)},
i:function(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.i(0)+" @ "+E.hD(this.b)+"x"},
gt:function(d){return P.a0(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k:function(d,e){var w=this
if(e==null)return!1
if(J.U(e)!==H.A(w))return!1
return e instanceof L.fj&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
L.iK.prototype={}
L.WA.prototype={
Dw:function(d){var w
this.a=d
w=this.b
if(w!=null){this.b=null
C.b.a6(w,d.gKu(d))}},
b3:function(d,e){var w=this.a
if(w!=null)return w.b3(0,e)
w=this.b;(w==null?this.b=H.a([],x.y):w).push(e)},
a5:function(d,e){var w,v=this.a
if(v!=null)return v.a5(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.e(v[w],e)){v=this.b
v.toString
C.b.bs(v,w)
break}},
gie:function(d){var w=this.a
return w==null?this:w}}
L.Er.prototype={
U2:function(d){++this.a.f},
p:function(d){var w=this.a;--w.f
w.Hn()
this.a=null}}
L.nz.prototype={
b3:function(d,e){var w,v,u,t,s,r,q,p=this
if(p.r)H.h(P.Z(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dI(0)
e.a.$2(s,!0)}catch(r){w=H.O(r)
v=H.at(r)
p.O2(U.bt("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=H.O(w)
t=H.at(w)
if(!J.e(u,p.c.a)){s=U.bt("by a synchronously-called image error listener")
q=$.ch
if(q!=null)q.$1(new U.bD(u,t,"image resource service",s,null,!1))}}},
BI:function(){if(this.r)H.h(P.Z(y.a));++this.f
return new L.Er(this)},
a5:function(d,e){var w,v,u,t,s,r=this
if(r.r)H.h(P.Z(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.e(w[v],e)){C.b.bs(w,v)
break}if(w.length===0){w=r.x
u=H.a(w.slice(0),H.R(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].$0()
C.b.sl(w,0)
r.Hn()}},
Hn:function(){var w,v=this
if(!v.e||v.r||v.a.length!==0||v.f!==0)return
w=v.b
if(w!=null)w.a.p(0)
v.b=null
v.r=!0},
a34:function(d){if(this.r)H.h(P.Z(y.a))
this.x.push(d)},
NX:function(d){if(this.r)H.h(P.Z(y.a))
C.b.A(this.x,d)},
Qf:function(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.r)H.h(P.Z(y.a))
t=m.b
if(t!=null)t.a.p(0)
m.b=d
t=m.a
if(t.length===0)return
s=P.bo(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.a8o(new L.fj(r.dI(0),q,p),!1)}catch(n){v=H.O(n)
u=H.at(n)
m.O2(U.bt("by an image listener"),v,u)}}},
qC:function(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new U.bD(e,h,m,d,f,g)
s=this.a
r=x.C
q=P.ap(new H.cX(new H.a9(s,new L.WB(),H.R(s).h("a9<1,~(v,bh?)?>")),r),!0,r.h("k.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=H.O(o)
t=H.at(o)
if(!J.e(u,e)){r=U.bt("when reporting an error to an image listener")
n=$.ch
if(n!=null)n.$1(new U.bD(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
r=$.ch
if(r!=null)r.$1(s)}},
O2:function(d,e,f){return this.qC(d,e,null,!1,f)},
a9z:function(d){var w,v,u,t
if(this.r)H.h(P.Z(y.a))
w=this.a
if(w.length!==0){v=x.F
u=P.ap(new H.cX(new H.a9(w,new L.WC(),H.R(w).h("a9<1,~(iK)?>")),v),!0,v.h("k.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
L.Fr.prototype={
U7:function(d,e,f,g,h){var w=this
w.d=f
e.eo(0,w.gXB(),new L.Ys(w,g),x.v)
if(d!=null)d.N2(w.ga9y(),new L.Yt(w,g))},
gJa:function(){var w=this.cx
return w==null?H.h(H.B("_shownTimestamp")):w},
XC:function(d){this.y=d
if(this.a.length!==0)this.m7()},
Xr:function(d){var w,v,u,t=this
t.dy=!1
if(t.a.length===0)return
w=t.cy
if(w!=null){w=t.gJa()
v=t.cy
w=d.a-w.a>=v.a}else{v=w
w=!0}if(w){w=t.ch
t.Gb(new L.fj(w.gfZ(w).dI(0),t.z,t.d))
t.cx=d
w=t.ch
t.cy=w.ga5s(w)
w=t.ch
w.gfZ(w).p(0)
t.ch=null
u=C.f.kD(t.db,t.y.gM6())
if(t.y.gO1()===-1||u<=t.y.gO1())t.m7()
return}v.toString
t.dx=P.ck(new P.az(C.d.aT((v.a-(d.a-t.gJa().a))*$.amU)),new L.Yr(t))},
m7:function(){var w=0,v=P.a7(x.v),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$m7=P.W(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.ch
if(m!=null)m.gfZ(m).p(0)
q.ch=null
t=4
w=7
return P.ad(q.y.wj(),$async$m7)
case 7:q.ch=e
t=2
w=6
break
case 4:t=3
l=s
p=H.O(l)
o=H.at(l)
q.qC(U.bt("resolving an image frame"),p,q.Q,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:if(q.y.gM6()===1){if(q.a.length===0){w=1
break}m=q.ch
q.Gb(new L.fj(m.gfZ(m).dI(0),q.z,q.d))
m=q.ch
m.gfZ(m).p(0)
q.ch=null
w=1
break}q.IQ()
case 1:return P.a5(u,v)
case 2:return P.a4(s,v)}})
return P.a6($async$m7,v)},
IQ:function(){if(this.dy)return
this.dy=!0
$.bT.Dk(this.gXq())},
Gb:function(d){this.Qf(d);++this.db},
b3:function(d,e){var w=this
if(w.a.length===0&&w.y!=null)w.m7()
w.Rh(0,e)},
a5:function(d,e){var w,v=this
v.Ri(0,e)
if(v.a.length===0){w=v.dx
if(w!=null)w.av(0)
v.dx=null}}}
L.Lu.prototype={}
L.Lw.prototype={}
L.Lv.prototype={}
var z=a.updateTypes(["~(er)","~(iK)","~(iA)","~(az)"])
P.ae1.prototype={
$1:function(d){d.$1(new H.vs(this.a.i(0),this.b))
return null},
$S:445}
P.abT.prototype={
$1:function(d){var w=this.a
if(d==null)w.jL(new P.z9("operation failed"))
else w.cb(0,d)},
$S:function(){return this.b.h("~(0)")}}
D.YI.prototype={
$2:function(d,e){this.a.E(0,new L.iK(d,e))},
$S:446}
M.Wy.prototype={
$2:function(d,e){this.a.qE(this.b,this.c,d,e)},
$S:function(){return H.q(this.a).h("~(dz.T,~(v,bh?))")}}
M.Wz.prototype={
$3:function(d,e,f){return this.Pd(d,e,f)},
Pd:function(d,e,f){var w=0,v=P.a7(x.v),u=this,t
var $async$$3=P.W(function(g,h){if(g===1)return P.a4(h,v)
while(true)switch(w){case 0:w=2
return P.ad(null,$async$$3)
case 2:t=new M.a6y(H.a([],x.y),H.a([],x.b))
u.b.Dw(t)
t.qC(U.bt("while resolving an image"),e,null,!0,f)
return P.a5(null,v)}})
return P.a6($async$$3,v)},
$S:function(){return H.q(this.a).h("ab<~>(dz.T?,v,bh?)")}}
M.Wv.prototype={
Pc:function(d,e){var w=0,v=P.a7(x.v),u,t=this,s
var $async$$2=P.W(function(f,g){if(f===1)return P.a4(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return P.a5(u,v)}})
return P.a6($async$$2,v)},
$2:function(d,e){return this.Pc(d,e)},
$C:"$2",
$R:2,
$S:447}
M.Wt.prototype={
$5:function(d,e,f,g,h){this.a.$2(g,h)},
$S:448}
M.Wu.prototype={
$0:function(){var w,v,u,t,s=this,r=null
try{r=s.b.qh(s.c)}catch(u){w=H.O(u)
v=H.at(u)
s.d.$2(w,v)
return}t=s.d
J.aer(r,new M.Ws(s.a,s.b,s.e,t),x.v).jG(t)},
$C:"$0",
$R:0,
$S:0}
M.Ws.prototype={
$1:function(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=H.O(u)
v=H.at(u)
t.d.$2(w,v)}},
$S:function(){return H.q(this.b).h("al(dz.T)")}}
M.Ww.prototype={
$0:function(){var w=this.a.a
w.toString
return w},
$S:129}
M.Wx.prototype={
$0:function(){return this.a.q6(0,this.b,$.j2.ga76())},
$S:129}
L.WB.prototype={
$1:function(d){return d.c},
$S:450}
L.WC.prototype={
$1:function(d){return d.b},
$S:451}
L.Ys.prototype={
$2:function(d,e){this.a.qC(U.bt("resolving an image codec"),d,this.b,!0,e)},
$C:"$2",
$R:2,
$S:31}
L.Yt.prototype={
$2:function(d,e){this.a.qC(U.bt("loading an image"),d,this.b,!0,e)},
$C:"$2",
$R:2,
$S:31}
L.Yr.prototype={
$0:function(){this.a.IQ()},
$C:"$0",
$R:0,
$S:0};(function aliases(){var w=L.nz.prototype
w.Rh=w.b3
w.Ri=w.a5})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=L.nz.prototype,"gKu","b3",0)
v(u,"ga9y","a9z",1)
v(u=L.Fr.prototype,"gXB","XC",2)
v(u,"gXq","Xr",3)
w(u,"gKu","b3",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(H.bb,[P.ae1,P.abT,D.YI,M.Wy,M.Wz,M.Wv,M.Wt,M.Wu,M.Ws,M.Ww,M.Wx,L.WB,L.WC,L.Ys,L.Yt,L.Yr])
v(P.v,[M.dz,U.jK,U.DX,X.pU,L.Lv,L.fj,L.Lu,L.Lw,L.Er])
u(D.nW,M.dz)
u(L.nz,L.Lv)
v(L.nz,[M.a6y,L.Fr])
u(L.iK,L.Lu)
u(L.WA,L.Lw)
w(L.Lu,Y.ah)
w(L.Lw,Y.ah)
w(L.Lv,Y.ah)})()
H.fK(b.typeUniverse,JSON.parse('{"fP":"K","h4":"K","fO":"T","h7":"T","hx":"ca","fT":"X","hk":"M","h_":"M","h9":"cF","hr":"c_","fW":"cO","fZ":"cA","fV":"bm","hn":"bm","ha":"d5","fY":"b_","fS":"d8","nW":{"dz":["afm"],"dz.T":"afm"},"afm":{"dz":["afm"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=H.H
return{s:w("iA"),h:w("iK"),x:w("er"),y:w("o<er>"),b:w("o<~()>"),D:w("w"),B:w("bZ<nW>"),C:w("cX<~(v,bh?)>"),F:w("cX<~(iK)>"),v:w("~")}})();(function constants(){C.ja=new U.jK("BoxFit.fill")
C.jb=new U.jK("BoxFit.contain")
C.nI=new U.jK("BoxFit.cover")
C.nJ=new U.jK("BoxFit.fitWidth")
C.nK=new U.jK("BoxFit.fitHeight")
C.nL=new U.jK("BoxFit.none")
C.fw=new U.jK("BoxFit.scaleDown")
C.kd=new P.Uc(1,"FilterQuality.low")
C.qo=new U.DX(C.I,C.I)
C.qW=new X.pU("ImageRepeat.repeat")
C.qX=new X.pU("ImageRepeat.repeatX")
C.qY=new X.pU("ImageRepeat.repeatY")
C.bt=new X.pU("ImageRepeat.noRepeat")})()}
$__dart_deferred_initializers__["4s2zzsnI5inCHTFFV1pia2rxVlg="] = $__dart_deferred_initializers__.current