self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aDe(d,e){var w,v={},u=new B.ac($.a9,e.h("ac<0>"))
v.a=!0
w=d.$1(new A.agY(v,new B.CP(u,e.h("CP<0>")),e))
v.a=!1
if(w!=null)throw B.c(B.bM(w))
return u},
agY:function agY(d,e,f){this.a=d
this.b=e
this.c=f},
aEi(d,e){var w=A.aDe(new A.ai_(d,e),x.s)
return w},
ai_:function ai_(d,e){this.a=d
this.b=e},
oJ:function oJ(d,e,f){this.a=d
this.b=e
this.c=f},
a0M:function a0M(d){this.a=d},
aCo(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.z9
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new B.P(s*t/q,t):new B.P(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new B.P(s,s*t/u):new B.P(q*u/t,q)
w=f
break
case 3:q=e.a
u=f.a
t=q*f.b/u
v=new B.P(q,t)
w=new B.P(u,t*u/q)
break
case 4:u=f.b
t=q*f.a/u
v=new B.P(t,q)
w=new B.P(t*u/q,u)
break
case 5:v=new B.P(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new B.P(u*r,u):e
q=f.a
if(w.a>q)w=new B.P(q,q/r)
v=e
break
default:v=null
w=null}return new A.G7(v,w)},
qA:function qA(d,e){this.a=d
this.b=e},
G7:function G7(d,e){this.a=d
this.b=e},
arF(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b2.gW(b2))return
w=b2.a
v=b2.c-w
u=b2.b
t=b2.d-u
s=new B.P(v,t)
r=a8.gaL(a8)
q=a8.gbs(a8)
if(a6==null)a6=D.lR
p=A.aCo(a6,new B.P(r,q).eo(0,b4),s)
o=p.a.a3(0,b4)
n=p.b
if(b3!==D.by&&n.k(0,s))b3=D.by
m=new B.b7(new B.bc())
m.sBK(!1)
if(a3!=null)m.sa5H(a3)
m.san(0,new B.K(((C.f.bI(b1*255,1)&255)<<24|0)>>>0))
m.snd(a5)
m.sBJ(a9)
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a7?-t:t)*k)
u+=i+a0.b*i
h=new B.x(t,u,t+l,u+j)
g=b3!==D.by||a7
if(g)a1.cr(0)
u=b3===D.by
if(!u)a1.ki(0,b2)
if(a7){f=-(w+v/2)
a1.aF(0,-f,0)
a1.dm(0,-1,1)
a1.aF(0,f,0)}e=a0.a8V(o,new B.x(0,0,r,q))
if(u)a1.lr(a8,e,h,m)
else for(w=A.aBw(b2,h,b3),v=w.length,d=0;d<w.length;w.length===v||(0,B.F)(w),++d)a1.lr(a8,e,w[d],m)
if(g)a1.cp(0)},
aBw(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.zT
if(!k||f===D.zU){w=C.e.eG((d.a-p)/o)
v=C.e.hL((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.zV){u=C.e.eG((d.b-m)/l)
t=C.e.hL((d.d-n)/l)}else{u=0
t=0}q=B.a([],x.j)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.cj(new B.p(p,r*l)))
return q},
og:function og(d,e){this.a=d
this.b=e},
dR:function dR(){},
Zm:function Zm(d,e,f){this.a=d
this.b=e
this.c=f},
Zn:function Zn(d,e,f){this.a=d
this.b=e
this.c=f},
Zj:function Zj(d,e){this.a=d
this.b=e},
Zi:function Zi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zk:function Zk(d){this.a=d},
Zl:function Zl(d,e){this.a=d
this.b=e},
aaB:function aaB(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
ajm(d,e,f,g,h){var w=new A.Hv(h,g,B.a([],x.y),B.a([],x.b))
w.Ug(d,e,f,g,h)
return w},
fZ:function fZ(d,e,f){this.a=d
this.b=e
this.c=f},
jf:function jf(d,e){this.a=d
this.b=e},
Zo:function Zo(){this.b=this.a=null},
GE:function GE(d){this.a=d},
oh:function oh(){},
Zp:function Zp(){},
Zq:function Zq(){},
Hv:function Hv(d,e,f,g){var _=this
_.z=_.y=null
_.Q=d
_.as=e
_.at=null
_.ax=$
_.ay=null
_.ch=0
_.CW=null
_.cx=!1
_.a=f
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=g},
a0w:function a0w(d,e){this.a=d
this.b=e},
a0x:function a0x(d,e){this.a=d
this.b=e},
a0v:function a0v(d){this.a=d},
Nu:function Nu(){},
Nw:function Nw(){},
Nv:function Nv(){}},B,J,C,D
A=a.updateHolder(c[13],A)
B=c[0]
J=c[1]
C=c[2]
D=c[19]
A.oJ.prototype={
qu(d){return new B.c1(this,x.B)},
qe(d,e,f){var w=null,v=B.ajK(w,w,w,x.h)
return A.ajm(new B.fH(v,B.o(v).h("fH<1>")),this.yW(e,f,v),e.a,w,e.b)},
yW(d,e,f){return this.a_K(d,e,f)},
a_K(d,e,f){var w=0,v=B.a_(x.s),u,t,s
var $async$yW=B.W(function(g,h){if(g===1)return B.X(h,v)
while(true)switch(w){case 0:t=B.a8s().O(d.a)
s=A.aEi(t,new A.a0M(f))
u=s
w=1
break
case 1:return B.Y(u,v)}})
return B.Z($async$yW,v)},
k(d,e){if(e==null)return!1
if(J.R(e)!==B.z(this))return!1
return e instanceof A.oJ&&e.a===this.a&&e.b===this.b},
gv(d){return B.a2(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.qA.prototype={
i(d){return"BoxFit."+this.b}}
A.G7.prototype={}
A.og.prototype={
i(d){return"ImageRepeat."+this.b}}
A.dR.prototype={
O(d){var w=new A.Zo()
this.W0(d,new A.Zm(this,d,w),new A.Zn(this,d,w))
return w},
W0(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new A.Zj(r,f)
v=null
try{v=this.qu(d)}catch(s){u=B.a0(s)
t=B.as(s)
w.$2(u,t)
return}J.aip(v,new A.Zi(r,this,e,w),x.v).kh(w)},
qQ(d,e,f,g){var w,v="_imageCache"
if(e.a!=null){B.b($.jy.kr$,v).NO(0,f,new A.Zk(e),g)
return}w=B.b($.jy.kr$,v).NO(0,f,new A.Zl(this,f),g)
if(w!=null)e.DP(w)},
i(d){return"ImageConfiguration()"}}
A.aaB.prototype={}
A.fZ.prototype={
dR(d){return new A.fZ(this.a.dR(0),this.b,this.c)},
gQy(){var w=this.a
return w.gbs(w)*w.gaL(w)*4},
n(d){this.a.n(0)},
i(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.i(0)+" @ "+B.iO(this.b)+"x"},
gv(d){return B.a2(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.R(e)!==B.z(w))return!1
return e instanceof A.fZ&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
A.jf.prototype={}
A.Zo.prototype={
DP(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.ac(w,d.gKB(d))
v.a.f=!1}},
a5(d,e){var w=this.a
if(w!=null)return w.a5(0,e)
w=this.b;(w==null?this.b=B.a([],x.y):w).push(e)},
P(d,e){var w,v=this.a
if(v!=null)return v.P(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.h(v[w],e)){v=this.b
v.toString
C.b.bw(v,w)
break}}}
A.GE.prototype={
Ub(d){++this.a.r},
n(d){var w=this.a;--w.r
w.tr()
this.a=null}}
A.oh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
if(p.w)B.J(B.V(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dR(0)
r=p.f
e.a.$2(s,!r)}catch(q){w=B.a0(q)
v=B.as(q)
p.O2(B.bj("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{r=e.c
r.toString
r.$2(s.a,s.b)}catch(w){u=B.a0(w)
t=B.as(w)
if(!J.h(u,p.c.a))B.dk(new B.bt(u,t,"image resource service",B.bj("by a synchronously-called image error listener"),null,!1))}},
BR(){if(this.w)B.J(B.V(y.a));++this.r
return new A.GE(this)},
P(d,e){var w,v,u,t,s,r=this
if(r.w)B.J(B.V(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.h(w[v],e)){C.b.bw(w,v)
break}if(w.length===0){w=r.x
u=B.a(w.slice(0),B.T(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,B.F)(u),++s)u[s].$0()
C.b.sm(w,0)
r.tr()}},
tr(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.n(0)
v.b=null
v.w=!0},
a4w(d){if(this.w)B.J(B.V(y.a))
this.x.push(d)},
NX(d){if(this.w)B.J(B.V(y.a))
C.b.C(this.x,d)},
Qb(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)B.J(B.V(y.a))
t=m.b
if(t!=null)t.a.n(0)
m.b=d
t=m.a
if(t.length===0)return
s=B.af(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.aa7(new A.fZ(r.dR(0),q,p),!1)}catch(n){v=B.a0(n)
u=B.as(n)
m.O2(B.bj("by an image listener"),v,u)}}},
qO(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new B.bt(e,h,m,d,f,g)
s=this.a
r=x.C
q=B.af(new B.dc(new B.a5(s,new A.Zp(),B.T(s).h("a5<1,~(A,cs?)?>")),r),!0,r.h("n.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=B.a0(o)
t=B.as(o)
if(!J.h(u,e)){r=B.bj("when reporting an error to an image listener")
n=$.i1()
if(n!=null)n.$1(new B.bt(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
B.dk(s)}},
O2(d,e,f){return this.qO(d,e,null,!1,f)},
abq(d){var w,v,u,t
if(this.w)B.J(B.V(y.a))
w=this.a
if(w.length!==0){v=x.F
u=B.af(new B.dc(new B.a5(w,new A.Zq(),B.T(w).h("a5<1,~(jf)?>")),v),!0,v.h("n.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
A.Hv.prototype={
Ug(d,e,f,g,h){var w=this
w.d=f
e.f5(0,w.gY7(),new A.a0w(w,g),x.v)
if(d!=null)w.y=d.kE(w.gabp(),new A.a0x(w,g))},
Y8(d){this.z=d
if(this.a.length!==0)this.mq()},
XX(d){var w,v,u,t=this,s="_shownTimestamp"
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){w=B.b(t.ax,s).a
v=t.ay
w=d.a-w>=v.a}else{v=w
w=!0}if(w){w=t.at
t.Gn(new A.fZ(w.gfK(w).dR(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.gLP(w)
w=t.at
w.gfK(w).n(0)
t.at=null
w=t.ch
v=t.z
u=C.f.j6(w,v.gv7(v))
w=t.z
if(w.gCE(w)!==-1){w=t.z
w=u<=w.gCE(w)}else w=!0
if(w)t.mq()
return}v.toString
t.CW=B.ch(new B.aP(C.e.aW((v.a-(d.a-B.b(t.ax,s).a))*$.aqO)),new A.a0v(t))},
mq(){var w=0,v=B.a_(x.v),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$mq=B.W(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.at
if(m!=null)m.gfK(m).n(0)
q.at=null
t=4
w=7
return B.aa(q.z.wq(),$async$mq)
case 7:q.at=e
t=2
w=6
break
case 4:t=3
l=s
p=B.a0(l)
o=B.as(l)
q.qO(B.bj("resolving an image frame"),p,q.as,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=q.z
if(m.gv7(m)===1){if(q.a.length===0){w=1
break}m=q.at
q.Gn(new A.fZ(m.gfK(m).dR(0),q.Q,q.d))
m=q.at
m.gfK(m).n(0)
q.at=null
w=1
break}q.IQ()
case 1:return B.Y(u,v)
case 2:return B.X(s,v)}})
return B.Z($async$mq,v)},
IQ(){if(this.cx)return
this.cx=!0
$.bX.DE(this.gXW())},
Gn(d){this.Qb(d);++this.ch},
a5(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gv7(w)>1
else w=!1}else w=!1
if(w)v.mq()
v.Rg(0,e)},
P(d,e){var w,v=this
v.Rh(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.af(0)
v.CW=null}},
tr(){var w,v=this
v.Rf()
if(v.w){w=v.y
if(w!=null)w.lL(null)
w=v.y
if(w!=null)w.af(0)
v.y=null}}}
A.Nu.prototype={}
A.Nw.prototype={}
A.Nv.prototype={}
var z=a.updateTypes(["~(f1)","~(jf)","~(j0)","~(aP)"])
A.agY.prototype={
$1(d){var w="operation failed"
if(d==null)if(this.a.a)throw B.c(B.bM(w))
else this.b.jg(new B.Bd(w))
else this.b.ct(0,d)},
$S(){return this.c.h("~(0?)")}}
A.ai_.prototype={
$1(d){d.$1(new B.xa(this.a.i(0),this.b))
return null},
$S:434}
A.a0M.prototype={
$2(d,e){this.a.G(0,new A.jf(d,e))},
$S:435}
A.Zm.prototype={
$2(d,e){this.a.qQ(this.b,this.c,d,e)},
$S(){return B.o(this.a).h("~(dR.T,~(A,cs?))")}}
A.Zn.prototype={
$3(d,e,f){return this.Ph(d,e,f)},
Ph(d,e,f){var w=0,v=B.a_(x.v),u=this,t
var $async$$3=B.W(function(g,h){if(g===1)return B.X(h,v)
while(true)switch(w){case 0:w=2
return B.aa(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.DP(new A.aaB(B.a([],x.y),B.a([],x.b)))
t=t.a
t.toString
t.qO(B.bj("while resolving an image"),e,null,!0,f)
return B.Y(null,v)}})
return B.Z($async$$3,v)},
$S(){return B.o(this.a).h("a3<~>(dR.T?,A,cs?)")}}
A.Zj.prototype={
Pg(d,e){var w=0,v=B.a_(x.v),u,t=this,s
var $async$$2=B.W(function(f,g){if(f===1)return B.X(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return B.Y(u,v)}})
return B.Z($async$$2,v)},
$2(d,e){return this.Pg(d,e)},
$S:436}
A.Zi.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=B.a0(u)
v=B.as(u)
t.d.$2(w,v)}},
$S(){return B.o(this.b).h("av(dR.T)")}}
A.Zk.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:136}
A.Zl.prototype={
$0(){return this.a.qe(0,this.b,$.jy.ga8Z())},
$S:136}
A.Zp.prototype={
$1(d){return d.c},
$S:438}
A.Zq.prototype={
$1(d){return d.b},
$S:439}
A.a0w.prototype={
$2(d,e){this.a.qO(B.bj("resolving an image codec"),d,this.b,!0,e)},
$S:32}
A.a0x.prototype={
$2(d,e){this.a.qO(B.bj("loading an image"),d,this.b,!0,e)},
$S:32}
A.a0v.prototype={
$0(){this.a.IQ()},
$S:0};(function aliases(){var w=A.oh.prototype
w.Rg=w.a5
w.Rh=w.P
w.Rf=w.tr})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=A.oh.prototype,"gKB","a5",0)
v(u,"gabp","abq",1)
v(u=A.Hv.prototype,"gY7","Y8",2)
v(u,"gXW","XX",3)
w(u,"gKB","a5",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.bw,[A.agY,A.ai_,A.Zn,A.Zi,A.Zp,A.Zq])
v(B.A,[A.dR,A.G7,A.Nv,A.fZ,A.Nu,A.Nw,A.GE])
u(A.oJ,A.dR)
v(B.em,[A.a0M,A.Zm,A.Zj,A.a0w,A.a0x])
v(B.lm,[A.qA,A.og])
v(B.fp,[A.Zk,A.Zl,A.a0v])
u(A.oh,A.Nv)
v(A.oh,[A.aaB,A.Hv])
u(A.jf,A.Nu)
u(A.Zo,A.Nw)
w(A.Nu,B.aj)
w(A.Nw,B.aj)
w(A.Nv,B.aj)})()
B.fK(b.typeUniverse,JSON.parse('{"oJ":{"dR":["ajn"],"dR.T":"ajn"},"qA":{"H":[]},"og":{"H":[]},"ajn":{"dR":["ajn"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=B.L
return{s:w("j0"),h:w("jf"),x:w("f1"),y:w("m<f1>"),j:w("m<x>"),b:w("m<~()>"),B:w("c1<oJ>"),C:w("dc<~(A,cs?)>"),F:w("dc<~(jf)>"),v:w("~")}})();(function constants(){D.wj=new A.qA(0,"fill")
D.wk=new A.qA(1,"contain")
D.lR=new A.qA(6,"scaleDown")
D.z9=new A.G7(C.u,C.u)
D.zT=new A.og(0,"repeat")
D.zU=new A.og(1,"repeatX")
D.zV=new A.og(2,"repeatY")
D.by=new A.og(3,"noRepeat")})()}
$__dart_deferred_initializers__["0ULa/dMWH0eSecW+q2d12SFNKqo="] = $__dart_deferred_initializers__.current
