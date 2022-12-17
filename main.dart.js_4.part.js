self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
anB(d,e){var w=0,v=A.a_(x.p),u,t
var $async$anB=A.U(function(f,g){if(f===1)return A.X(g,v)
while(true)switch(w){case 0:w=3
return A.W(B.aKd(d,e),$async$anB)
case 3:t=g
if($.arG()){u=A.Gs(t,d,null,null)
w=1
break}else{u=A.asp(t,d)
w=1
break}case 1:return A.Y(u,v)}})
return A.Z($async$anB,v)},
aKd(d,e){var w=null,v=new A.ab($.ad,x.E),u=new A.b5(v,x.Z),t=$.aAB().$0()
A.asM(t,"GET",d,!0)
t.responseType="arraybuffer"
A.c1(t,"progress",A.ao(new B.amv(e)),w)
A.c1(t,"error",A.ao(new B.amw(u,d)),w)
A.c1(t,"load",A.ao(new B.amx(t,u,d)),w)
A.asN(t,w)
return v},
aKq(d,e){var w,v={},u=new A.ab($.ad,e.h("ab<0>"))
v.a=!0
w=d.$1(new B.amD(v,new A.Ei(u,e.h("Ei<0>")),e))
v.a=!1
if(w!=null)throw A.b(A.c2(w))
return u},
amF:function amF(){},
amv:function amv(d){this.a=d},
amw:function amw(d,e){this.a=d
this.b=e},
amx:function amx(d,e,f){this.a=d
this.b=e
this.c=f},
amD:function amD(d,e,f){this.a=d
this.b=e
this.c=f},
aLx(d,e){if($.aM())return B.anB(d.j(0),e)
else return B.aKq(new B.anM(d,e),x.p)},
anM:function anM(d,e){this.a=d
this.b=e},
pO:function pO(d,e,f){this.a=d
this.b=e
this.c=f},
a5B:function a5B(d){this.a=d},
aJo(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.Ch
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new A.T(s*t/q,t):new A.T(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new A.T(s,s*t/u):new A.T(q*u/t,q)
w=f
break
case 3:q=e.a
u=f.a
t=q*f.b/u
v=new A.T(q,t)
w=new A.T(u,t*u/q)
break
case 4:u=f.b
t=q*f.a/u
v=new A.T(t,q)
w=new A.T(t*u/q,u)
break
case 5:v=new A.T(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new A.T(u*r,u):e
q=f.a
if(w.a>q)w=new A.T(q,q/r)
v=e
break
default:v=null
w=null}return new B.Iw(v,w)},
rz:function rz(d,e){this.a=d
this.b=e},
Iw:function Iw(d,e){this.a=d
this.b=e},
axI(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b2.gZ(b2))return
w=b2.a
v=b2.c-w
u=b2.b
t=b2.d-u
s=new A.T(v,t)
r=a8.gaO(a8)
q=a8.gbF(a8)
if(a6==null)a6=D.m0
p=B.aJo(a6,new A.T(r,q).dX(0,b4),s)
o=p.a.a5(0,b4)
n=p.b
if(b3!==D.bG&&n.k(0,s))b3=D.bG
m=$.aM()?A.bq():new A.bg(new A.bk())
m.svV(!1)
if(a3!=null)m.sME(a3)
m.sal(0,new A.R(((C.f.bQ(b1*255,1)&255)<<24|0)>>>0))
m.sm_(a5)
m.svT(a9)
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a7?-t:t)*k)
u+=i+a0.b*i
h=new A.y(t,u,t+l,u+j)
g=b3!==D.bG||a7
if(g)a1.bO(0)
u=b3===D.bG
if(!u)a1.kB(b2)
if(a7){f=-(w+v/2)
a1.an(0,-f,0)
a1.dE(0,-1,1)
a1.an(0,f,0)}e=a0.acp(o,new A.y(0,0,r,q))
if(u)a1.iP(a8,e,h,m)
else for(w=B.aIw(b2,h,b3),v=w.length,d=0;d<w.length;w.length===v||(0,A.F)(w),++d)a1.iP(a8,e,w[d],m)
if(g)a1.bw(0)},
aIw(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.D8
if(!k||f===D.D9){w=C.d.eL((d.a-p)/o)
v=C.d.eG((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.Da){u=C.d.eL((d.b-m)/l)
t=C.d.eG((d.d-n)/l)}else{u=0
t=0}q=A.a([],x.T)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.bY(new A.o(p,r*l)))
return q},
pl:function pl(d,e){this.a=d
this.b=e},
ea:function ea(){},
a33:function a33(d,e,f){this.a=d
this.b=e
this.c=f},
a34:function a34(d,e,f){this.a=d
this.b=e
this.c=f},
a30:function a30(d,e){this.a=d
this.b=e},
a3_:function a3_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a31:function a31(d){this.a=d},
a32:function a32(d,e){this.a=d
this.b=e},
afQ:function afQ(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
zA(d,e,f,g,h){var w=new B.JW(h,g,A.a([],x.v),A.a([],x.u))
w.WV(d,e,f,g,h)
return w},
hs:function hs(d,e,f){this.a=d
this.b=e
this.c=f},
jH:function jH(d,e){this.a=d
this.b=e},
a35:function a35(){this.b=this.a=null},
J6:function J6(d){this.a=d},
pm:function pm(){},
a36:function a36(){},
a37:function a37(){},
JW:function JW(d,e,f,g){var _=this
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
a5l:function a5l(d,e){this.a=d
this.b=e},
a5m:function a5m(d,e){this.a=d
this.b=e},
a5k:function a5k(d){this.a=d},
Qm:function Qm(){},
Qo:function Qo(){},
Qn:function Qn(){}},A,J,C,D
B=a.updateHolder(c[13],B)
A=c[0]
J=c[1]
C=c[2]
D=c[20]
B.pO.prototype={
qY(d){return new A.bP(this,x.i)},
o6(d,e,f){var w=null,v=A.ac6(w,w,w,x.r)
return B.zA(new A.f5(v,A.n(v).h("f5<1>")),this.tC(e,w,f,v),e.a,w,e.b)},
o7(d,e){var w=null,v=A.ac6(w,w,w,x.r)
return B.zA(new A.f5(v,A.n(v).h("f5<1>")),this.tC(d,e,w,v),d.a,w,d.b)},
tC(d,e,f,g){return this.a2K(d,e,f,g)},
a2K(d,e,f,g){var w=0,v=A.a_(x.p),u,t,s
var $async$tC=A.U(function(h,i){if(h===1)return A.X(i,v)
while(true)switch(w){case 0:t=A.adF().a4(d.a)
s=B.aLx(t,new B.a5B(g))
u=s
w=1
break
case 1:return A.Y(u,v)}})
return A.Z($async$tC,v)},
k(d,e){if(e==null)return!1
if(J.a0(e)!==A.B(this))return!1
return e instanceof B.pO&&e.a===this.a&&e.b===this.b},
gt(d){return A.S(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
B.rz.prototype={
j(d){return"BoxFit."+this.b}}
B.Iw.prototype={}
B.pl.prototype={
j(d){return"ImageRepeat."+this.b}}
B.ea.prototype={
a4(d){var w=new B.a35()
this.YO(d,new B.a33(this,d,w),new B.a34(this,d,w))
return w},
YO(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new B.a30(r,f)
v=null
try{v=this.qY(d)}catch(s){u=A.a8(s)
t=A.aw(s)
w.$2(u,t)
return}v.aW(new B.a3_(r,this,e,w),x.H).ky(w)},
re(d,e,f,g){var w,v
if(e.a!=null){w=$.hz.jJ$
w===$&&A.c()
w.PI(0,f,new B.a31(e),g)
return}w=$.hz.jJ$
w===$&&A.c()
v=w.PI(0,f,new B.a32(this,f),g)
if(v!=null)e.EZ(v)},
o6(d,e,f){throw A.b(A.M("Implement loadBuffer for faster image loading"))},
o7(d,e){return this.o6(0,d,$.hz.gacs())},
j(d){return"ImageConfiguration()"}}
B.afQ.prototype={}
B.hs.prototype={
dO(d){return new B.hs(this.a.dO(0),this.b,this.c)},
gSx(){var w=this.a
return w.gbF(w)*w.gaO(w)*4},
n(){this.a.n()},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+A.jb(this.b)+"x"},
gt(d){return A.S(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.a0(e)!==A.B(w))return!1
return e instanceof B.hs&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
B.jH.prototype={}
B.a35.prototype={
EZ(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.a_(w,d.gux(d))
v.a.f=!1}},
a0(d,e){var w=this.a
if(w!=null)return w.a0(0,e)
w=this.b;(w==null?this.b=A.a([],x.v):w).push(e)},
M(d,e){var w,v=this.a
if(v!=null)return v.M(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.f(v[w],e)){v=this.b
v.toString
C.b.bM(v,w)
break}}}
B.J6.prototype={
WQ(d){++this.a.r},
n(){var w=this.a;--w.r
w.tK()
this.a=null}}
B.pm.prototype={
a0(d,e){var w,v,u,t,s,r,q,p=this
if(p.w)A.Q(A.aa(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dO(0)
r=p.f
e.a.$2(s,!r)}catch(q){w=A.a8(q)
v=A.aw(q)
p.PX(A.bv("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{r=e.c
r.toString
r.$2(s.a,s.b)}catch(w){u=A.a8(w)
t=A.aw(w)
if(!J.f(u,p.c.a))A.de(new A.by(u,t,"image resource service",A.bv("by a synchronously-called image error listener"),null,!1))}},
CX(){if(this.w)A.Q(A.aa(y.a));++this.r
return new B.J6(this)},
M(d,e){var w,v,u,t,s,r=this
if(r.w)A.Q(A.aa(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.f(w[v],e)){C.b.bM(w,v)
break}if(w.length===0){w=r.x
u=A.a(w.slice(0),A.V(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.F)(u),++s)u[s].$0()
C.b.P(w)
r.tK()}},
tK(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.n()
v.b=null
v.w=!0},
a7O(d){if(this.w)A.Q(A.aa(y.a))
this.x.push(d)},
PR(d){if(this.w)A.Q(A.aa(y.a))
C.b.v(this.x,d)},
Sa(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)A.Q(A.aa(y.a))
t=m.b
if(t!=null)t.a.n()
m.b=d
t=m.a
if(t.length===0)return
s=A.aj(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.adK(new B.hs(r.dO(0),q,p),!1)}catch(n){v=A.a8(n)
u=A.aw(n)
m.PX(A.bv("by an image listener"),v,u)}}},
rd(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new A.by(e,h,m,d,f,g)
s=this.a
r=x.I
q=A.aj(new A.e1(new A.a9(s,new B.a36(),A.V(s).h("a9<1,~(C,cO?)?>")),r),!0,r.h("p.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=A.a8(o)
t=A.aw(o)
if(!J.f(u,e)){r=A.bv("when reporting an error to an image listener")
n=$.it()
if(n!=null)n.$1(new A.by(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
A.de(s)}},
PX(d,e,f){return this.rd(d,e,null,!1,f)},
af_(d){var w,v,u,t
if(this.w)A.Q(A.aa(y.a))
w=this.a
if(w.length!==0){v=x.s
u=A.aj(new A.e1(new A.a9(w,new B.a37(),A.V(w).h("a9<1,~(jH)?>")),v),!0,v.h("p.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.JW.prototype={
WV(d,e,f,g,h){var w=this
w.d=f
e.f7(w.ga00(),new B.a5l(w,g),x.H)
if(d!=null)w.y=d.kV(w.gaeZ(),new B.a5m(w,g))},
a01(d){this.z=d
if(this.a.length!==0)this.mV()},
a_P(d){var w,v,u,t=this
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){v=t.ax
v===$&&A.c()
v=d.a-v.a>=w.a}else v=!0
if(v){w=t.at
t.HF(new B.hs(w.gi5(w).dO(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.glU(w)
w=t.at
w.gi5(w).n()
t.at=null
u=C.f.is(t.ch,t.z.gqw())
if(t.z.gwM()===-1||u<=t.z.gwM())t.mV()
return}w.toString
v=t.ax
v===$&&A.c()
t.CW=A.ce(new A.b_(C.d.br((w.a-(d.a-v.a))*$.awM)),new B.a5k(t))},
mV(){var w=0,v=A.a_(x.H),u,t=2,s,r=this,q,p,o,n,m
var $async$mV=A.U(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:n=r.at
if(n!=null)n.gi5(n).n()
r.at=null
t=4
w=7
return A.W(r.z.jf(),$async$mV)
case 7:r.at=e
t=2
w=6
break
case 4:t=3
m=s
q=A.a8(m)
p=A.aw(m)
r.rd(A.bv("resolving an image frame"),q,r.as,!0,p)
w=1
break
w=6
break
case 3:w=2
break
case 6:if(r.z.gqw()===1){if(r.a.length===0){w=1
break}n=r.at
r.HF(new B.hs(n.gi5(n).dO(0),r.Q,r.d))
n=r.at
n.gi5(n).n()
r.at=null
w=1
break}r.Kg()
case 1:return A.Y(u,v)
case 2:return A.X(s,v)}})
return A.Z($async$mV,v)},
Kg(){if(this.cx)return
this.cx=!0
$.bW.EM(this.ga_O())},
HF(d){this.Sa(d);++this.ch},
a0(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gqw()>1
else w=!1}else w=!1
if(w)v.mV()
v.TI(0,e)},
M(d,e){var w,v=this
v.TJ(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.ai(0)
v.CW=null}},
tK(){var w,v=this
v.TH()
if(v.w){w=v.y
if(w!=null)w.mb(null)
w=v.y
if(w!=null)w.ai(0)
v.y=null}}}
B.Qm.prototype={}
B.Qo.prototype={}
B.Qn.prototype={}
var z=a.updateTypes(["~(fs)","~(jH)","~(eN)","~(b_)"])
B.amF.prototype={
$0(){var w=A.Ff("XMLHttpRequest",[])
w.toString
return x.e.a(w)},
$S:58}
B.amv.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:1}
B.amw.prototype={
$1(d){this.a.iK(new A.te(y.e+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:1}
B.amx.prototype={
$1(d){var w,v,u=this,t=u.a,s=t.status
s.toString
w=s>=200&&s<300
v=s>307&&s<400
if(!(w||s===0||s===304||v)){u.b.iK(new A.te(y.e+u.c+"\nServer response code: "+s))
return}u.b.cp(0,A.cl(x.J.a(t.response),0,null))},
$S:1}
B.amD.prototype={
$1(d){var w="operation failed"
if(d==null)if(this.a.a)throw A.b(A.c2(w))
else this.b.iK(new A.CK(w))
else this.b.cp(0,d)},
$S(){return this.c.h("~(0?)")}}
B.anM.prototype={
$1(d){d.$1(new A.yA(this.a.j(0),this.b))
return null},
$S:454}
B.a5B.prototype={
$2(d,e){this.a.C(0,new B.jH(d,e))},
$S:455}
B.a33.prototype={
$2(d,e){this.a.re(this.b,this.c,d,e)},
$S(){return A.n(this.a).h("~(ea.T,~(C,cO?))")}}
B.a34.prototype={
$3(d,e,f){return this.Rc(d,e,f)},
Rc(d,e,f){var w=0,v=A.a_(x.H),u=this,t
var $async$$3=A.U(function(g,h){if(g===1)return A.X(h,v)
while(true)switch(w){case 0:w=2
return A.W(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.EZ(new B.afQ(A.a([],x.v),A.a([],x.u)))
t=t.a
t.toString
t.rd(A.bv("while resolving an image"),e,null,!0,f)
return A.Y(null,v)}})
return A.Z($async$$3,v)},
$S(){return A.n(this.a).h("a7<~>(ea.T?,C,cO?)")}}
B.a30.prototype={
Rb(d,e){var w=0,v=A.a_(x.H),u,t=this,s
var $async$$2=A.U(function(f,g){if(f===1)return A.X(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return A.Y(u,v)}})
return A.Z($async$$2,v)},
$2(d,e){return this.Rb(d,e)},
$S:456}
B.a3_.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.a8(u)
v=A.aw(u)
t.d.$2(w,v)}},
$S(){return A.n(this.b).h("aS(ea.T)")}}
B.a31.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:150}
B.a32.prototype={
$0(){return this.a.o7(this.b,$.hz.gacu())},
$S:150}
B.a36.prototype={
$1(d){return d.c},
$S:458}
B.a37.prototype={
$1(d){return d.b},
$S:459}
B.a5l.prototype={
$2(d,e){this.a.rd(A.bv("resolving an image codec"),d,this.b,!0,e)},
$S:33}
B.a5m.prototype={
$2(d,e){this.a.rd(A.bv("loading an image"),d,this.b,!0,e)},
$S:33}
B.a5k.prototype={
$0(){this.a.Kg()},
$S:0};(function aliases(){var w=B.pm.prototype
w.TI=w.a0
w.TJ=w.M
w.TH=w.tK})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.pm.prototype,"gux","a0",0)
v(u,"gaeZ","af_",1)
v(u=B.JW.prototype,"ga00","a01",2)
v(u,"ga_O","a_P",3)
w(u,"gux","a0",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.hl,[B.amF,B.a31,B.a32,B.a5k])
v(A.bN,[B.amv,B.amw,B.amx,B.amD,B.anM,B.a34,B.a3_,B.a36,B.a37])
v(A.C,[B.ea,B.Iw,B.Qn,B.hs,B.Qm,B.Qo,B.J6])
u(B.pO,B.ea)
v(A.fh,[B.a5B,B.a33,B.a30,B.a5l,B.a5m])
v(A.lY,[B.rz,B.pl])
u(B.pm,B.Qn)
v(B.pm,[B.afQ,B.JW])
u(B.jH,B.Qm)
u(B.a35,B.Qo)
w(B.Qm,A.aq)
w(B.Qo,A.aq)
w(B.Qn,A.aq)})()
A.fI(b.typeUniverse,JSON.parse('{"pO":{"ea":["apc"],"ea.T":"apc"},"rz":{"J":[]},"pl":{"J":[]},"apc":{"ea":["apc"]}}'))
var y={e:"Failed to load network image.\nImage URL: ",a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=A.G
return{J:w("oO"),p:w("eN"),r:w("jH"),x:w("fs"),v:w("l<fs>"),T:w("l<y>"),u:w("l<~()>"),e:w("d"),i:w("bP<pO>"),I:w("e1<~(C,cO?)>"),s:w("e1<~(jH)>"),Z:w("b5<dm>"),E:w("ab<dm>"),H:w("~")}})();(function constants(){D.xD=new B.rz(0,"fill")
D.xE=new B.rz(1,"contain")
D.m0=new B.rz(6,"scaleDown")
D.Ch=new B.Iw(C.v,C.v)
D.D8=new B.pl(0,"repeat")
D.D9=new B.pl(1,"repeatX")
D.Da=new B.pl(2,"repeatY")
D.bG=new B.pl(3,"noRepeat")})();(function lazyInitializers(){var w=a.lazy
w($,"aQf","aAB",()=>new B.amF())})()}
$__dart_deferred_initializers__["ebaV9VirRWR6nXeRV7Bpz9RTafc="] = $__dart_deferred_initializers__.current
