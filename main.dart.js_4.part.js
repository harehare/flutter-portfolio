self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aCW(d,e){var w=A.azT(new A.agv(d,e),x.s)
return w},
azT(d,e){var w=new B.Z($.M,e.h("Z<0>")),v=d.$1(new A.aeo(new B.Ba(w,e.h("Ba<0>")),e))
if(v!=null)throw B.c(B.bS(v))
return w},
agv:function agv(d,e){this.a=d
this.b=e},
aeo:function aeo(d,e){this.a=d
this.b=e},
o9:function o9(d,e){this.a=d
this.b=e},
a_u:function a_u(d){this.a=d},
aAS(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.z6
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new B.K(s*t/q,t):new B.K(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new B.K(s,s*t/u):new B.K(q*u/t,q)
w=f
break
case 3:q=e.a
u=f.a
t=q*f.b/u
v=new B.K(q,t)
w=new B.K(u,t*u/q)
break
case 4:u=f.b
t=q*f.a/u
v=new B.K(t,q)
w=new B.K(t*u/q,u)
break
case 5:v=new B.K(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new B.K(u*r,u):e
q=f.a
if(w.a>q)w=new B.K(q,q/r)
v=e
break
default:v=null
w=null}return new A.Et(v,w)},
us:function us(d,e){this.a=d
this.b=e},
Et:function Et(d,e){this.a=d
this.b=e},
aqp(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b1.gN(b1))return
w=b1.a
v=b1.c-w
u=b1.b
t=b1.d-u
s=new B.K(v,t)
r=a7.gaD(a7)
q=a7.gaI(a7)
if(a5==null)a5=D.ip
p=A.aAS(a5,new B.K(r,q).fm(0,b3),s)
o=p.a.aa(0,b3)
n=p.b
if(b2!==D.br&&n.k(0,s))b2=D.br
m=new B.bd(new B.bf())
m.sBd(!1)
if(a2!=null)m.sa4a(a2)
m.sax(0,new B.C(((C.e.c5(b0*255,1)&255)<<24|0)>>>0))
m.sn_(a4)
m.sBc(a8)
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=d.a
t=w+(k+(a6?-t:t)*k)
u+=i+d.b*i
h=new B.w(t,u,t+l,u+j)
g=b2!==D.br||a6
if(g)a0.cC(0)
u=b2===D.br
if(!u)a0.k_(0,b1)
if(a6){f=-(w+v/2)
a0.aJ(0,-f,0)
a0.dz(0,-1,1)
a0.aJ(0,f,0)}e=d.a7C(o,new B.w(0,0,r,q))
if(u)a0.lk(a7,e,h,m)
else for(w=A.ap8(b1,h,b2),w=new B.e7(w.a(),w.$ti.h("e7<1>"));w.t();)a0.lk(a7,e,w.gw(w),m)
if(g)a0.cA(0)},
ap8(d,e,f){return B.dE(function(){var w=d,v=e,u=f
var t=0,s=1,r,q,p,o,n,m,l,k,j,i,h,g,a0,a1
return function $async$ap8(a2,a3){if(a2===1){r=a3
t=s}while(true)switch(t){case 0:k=v.c
j=v.a
i=k-j
h=v.d
g=v.b
a0=h-g
a1=u!==D.zD
if(!a1||u===D.zE){q=C.d.eA((w.a-j)/i)
p=C.d.hv((w.c-k)/i)}else{q=0
p=0}if(!a1||u===D.zF){o=C.d.eA((w.b-g)/a0)
n=C.d.hv((w.d-h)/a0)}else{o=0
n=0}m=q
case 2:if(!(m<=p)){t=4
break}k=m*i,l=o
case 5:if(!(l<=n)){t=7
break}t=8
return v.cE(new B.o(k,l*a0))
case 8:case 6:++l
t=5
break
case 7:case 3:++m
t=2
break
case 4:return B.dz()
case 1:return B.dA(r)}}},x.D)},
q6:function q6(d,e){this.a=d
this.b=e},
dM:function dM(){},
Y5:function Y5(d,e,f){this.a=d
this.b=e
this.c=f},
Y6:function Y6(d,e,f){this.a=d
this.b=e
this.c=f},
Y2:function Y2(d,e){this.a=d
this.b=e},
Y0:function Y0(d){this.a=d},
Y1:function Y1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Y_:function Y_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y3:function Y3(d){this.a=d},
Y4:function Y4(d,e){this.a=d
this.b=e},
a9a:function a9a(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=e},
aig(d,e,f,g,h){var w=new A.FP(h,g,B.a([],x.y),B.a([],x.b))
w.TK(d,e,f,g,h)
return w},
fF:function fF(d,e,f){this.a=d
this.b=e
this.c=f},
iO:function iO(d,e){this.a=d
this.b=e},
Y7:function Y7(){this.b=this.a=null},
EZ:function EZ(d){this.a=d},
nE:function nE(){},
Y8:function Y8(){},
Y9:function Y9(){},
FP:function FP(d,e,f,g){var _=this
_.y=null
_.z=d
_.Q=e
_.ch=null
_.cx=$
_.cy=null
_.db=0
_.dx=null
_.dy=!1
_.a=f
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=g},
a_d:function a_d(d,e){this.a=d
this.b=e},
a_e:function a_e(d,e){this.a=d
this.b=e},
a_c:function a_c(d){this.a=d},
Mp:function Mp(){},
Mr:function Mr(){},
Mq:function Mq(){}},B,J,C,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[13],A)
B=c[0]
J=c[1]
C=c[2]
D=c[19]
A.o9.prototype={
q0(d){return new B.c7(this,x.B)},
pQ(d,e,f){var w=null,v=B.anz(w,w,w,x.h)
return A.aig(new B.hw(v,B.q(v).h("hw<1>")),this.ZB(e,f,v),e.a,w,e.b)},
ZB(d,e,f){return A.aCW(B.a70().U(d.a),new A.a_u(f))},
k(d,e){if(e==null)return!1
if(J.Q(e)!==B.y(this))return!1
return e instanceof A.o9&&e.a===this.a&&e.b===this.b},
gv(d){return B.U(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.us.prototype={
i(d){return"BoxFit."+this.b}}
A.Et.prototype={}
A.q6.prototype={
i(d){return"ImageRepeat."+this.b}}
A.dM.prototype={
U(d){var w=new A.Y7()
this.Vj(d,new A.Y5(this,d,w),new A.Y6(this,d,w))
return w},
Vj(d,e,f){var w,v=null,u={}
u.a=null
u.b=!1
w=new A.Y2(u,f)
$.M.LE(new B.Qq(new A.Y0(w),v,v,v,v,v,v,v,v,v,v,v,v)).jo(new A.Y1(u,this,d,w,e))},
qn(d,e,f,g){var w
if(e.a!=null){$.j5.kc$.N7(0,f,new A.Y3(e),g)
return}w=$.j5.kc$.N7(0,f,new A.Y4(this,f),g)
if(w!=null)e.Dd(w)},
i(d){return"ImageConfiguration()"}}
A.a9a.prototype={}
A.fF.prototype={
dT(d){return new A.fF(this.a.dT(0),this.b,this.c)},
gPZ(){var w=this.a
return w.gaI(w)*w.gaD(w)*4},
p(d){this.a.p(0)},
i(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.i(0)+" @ "+B.hB(this.b)+"x"},
gv(d){return B.U(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.Q(e)!==B.y(w))return!1
return e instanceof A.fF&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
A.iO.prototype={}
A.Y7.prototype={
Dd(d){var w
this.a=d
w=this.b
if(w!=null){this.b=null
C.b.a9(w,d.gK1(d))}},
ad(d,e){var w=this.a
if(w!=null)return w.ad(0,e)
w=this.b;(w==null?this.b=B.a([],x.y):w).push(e)},
a3(d,e){var w,v=this.a
if(v!=null)return v.a3(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.h(v[w],e)){v=this.b
v.toString
C.b.bC(v,w)
break}}}
A.EZ.prototype={
TF(d){++this.a.f},
p(d){var w=this.a;--w.f
w.GZ()
this.a=null}}
A.nE.prototype={
ad(d,e){var w,v,u,t,s,r,q,p=this
if(p.r)B.N(B.W(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dT(0)
e.a.$2(s,!0)}catch(r){w=B.T(r)
v=B.ai(r)
p.Nm(B.bg("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=B.T(w)
t=B.ai(w)
if(!J.h(u,p.c.a))B.dd(new B.bs(u,t,"image resource service",B.bg("by a synchronously-called image error listener"),null,!1))}},
Bk(){if(this.r)B.N(B.W(y.a));++this.f
return new A.EZ(this)},
a3(d,e){var w,v,u,t,s,r=this
if(r.r)B.N(B.W(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.h(w[v],e)){C.b.bC(w,v)
break}if(w.length===0){w=r.x
u=B.a(w.slice(0),B.P(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,B.F)(u),++s)u[s].$0()
C.b.sl(w,0)
r.GZ()}},
GZ(){var w,v=this
if(!v.e||v.r||v.a.length!==0||v.f!==0)return
w=v.b
if(w!=null)w.a.p(0)
v.b=null
v.r=!0},
a3_(d){if(this.r)B.N(B.W(y.a))
this.x.push(d)},
Ng(d){if(this.r)B.N(B.W(y.a))
C.b.C(this.x,d)},
PC(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.r)B.N(B.W(y.a))
t=m.b
if(t!=null)t.a.p(0)
m.b=d
t=m.a
if(t.length===0)return
s=B.bx(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.a8X(new A.fF(r.dT(0),q,p),!1)}catch(n){v=B.T(n)
u=B.ai(n)
m.Nm(B.bg("by an image listener"),v,u)}}},
ql(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new B.bs(e,h,m,d,f,g)
s=this.a
r=x.C
q=B.au(new B.d5(new B.a7(s,new A.Y8(),B.P(s).h("a7<1,~(v,bH?)?>")),r),!0,r.h("m.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=B.T(o)
t=B.ai(o)
if(!J.h(u,e)){r=B.bg("when reporting an error to an image listener")
n=$.hG()
if(n!=null)n.$1(new B.bs(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
B.dd(s)}},
Nm(d,e,f){return this.ql(d,e,null,!1,f)},
aa7(d){var w,v,u,t
if(this.r)B.N(B.W(y.a))
w=this.a
if(w.length!==0){v=x.F
u=B.au(new B.d5(new B.a7(w,new A.Y9(),B.P(w).h("a7<1,~(iO)?>")),v),!0,v.h("m.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
A.FP.prototype={
TK(d,e,f,g,h){var w=this
w.d=f
e.eF(0,w.gXf(),new A.a_d(w,g),x.v)
if(d!=null)d.kr(w.gaa6(),new A.a_e(w,g))},
Xg(d){this.y=d
if(this.a.length!==0)this.ml()},
X4(d){var w,v,u,t=this,s="_shownTimestamp"
t.dy=!1
if(t.a.length===0)return
w=t.cy
if(w!=null){w=B.b(t.cx,s).a
v=t.cy
w=d.a-w>=v.a}else{v=w
w=!0}if(w){w=t.ch
t.FN(new A.fF(w.gh5(w).dT(0),t.z,t.d))
t.cx=d
w=t.ch
t.cy=w.ga5A(w)
w=t.ch
w.gh5(w).p(0)
t.ch=null
u=C.e.mf(t.db,t.y.gAW())
if(t.y.gNl()===-1||u<=t.y.gNl())t.ml()
return}v.toString
t.dx=B.cr(new B.ay(C.d.b9((v.a-(d.a-B.b(t.cx,s).a))*$.apC)),new A.a_c(t))},
ml(){var w=0,v=B.a2(x.v),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$ml=B.X(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.ch
if(m!=null)m.gh5(m).p(0)
q.ch=null
t=4
w=7
return B.ac(q.y.vH(),$async$ml)
case 7:q.ch=e
t=2
w=6
break
case 4:t=3
l=s
p=B.T(l)
o=B.ai(l)
q.ql(B.bg("resolving an image frame"),p,q.Q,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:if(q.y.gAW()===1){if(q.a.length===0){w=1
break}m=q.ch
q.FN(new A.fF(m.gh5(m).dT(0),q.z,q.d))
m=q.ch
m.gh5(m).p(0)
q.ch=null
w=1
break}q.Ip()
case 1:return B.a0(u,v)
case 2:return B.a_(s,v)}})
return B.a1($async$ml,v)},
Ip(){if(this.dy)return
this.dy=!0
$.c0.D1(this.gX3())},
FN(d){this.PC(d);++this.db},
ad(d,e){var w,v=this
if(v.a.length===0){w=v.y
if(w!=null)w=v.b==null||w.gAW()>1
else w=!1}else w=!1
if(w)v.ml()
v.QC(0,e)},
a3(d,e){var w,v=this
v.QD(0,e)
if(v.a.length===0){w=v.dx
if(w!=null)w.ap(0)
v.dx=null}}}
A.Mp.prototype={}
A.Mr.prototype={}
A.Mq.prototype={}
var z=a.updateTypes(["~(eG)","~(iO)","~(iD)","~(ay)"])
A.agv.prototype={
$1(d){d.$1(new B.vG(this.a.i(0),this.b))
return null},
$S:440}
A.aeo.prototype={
$1(d){var w=this.a
if(d==null)w.iZ(new B.zB("operation failed"))
else w.cf(0,d)},
$S(){return this.b.h("~(0)")}}
A.a_u.prototype={
$2(d,e){this.a.G(0,new A.iO(d,e))},
$S:441}
A.Y5.prototype={
$2(d,e){this.a.qn(this.b,this.c,d,e)},
$S(){return B.q(this.a).h("~(dM.T,~(v,bH?))")}}
A.Y6.prototype={
$3(d,e,f){return this.OF(d,e,f)},
OF(d,e,f){var w=0,v=B.a2(x.v),u=this,t
var $async$$3=B.X(function(g,h){if(g===1)return B.a_(h,v)
while(true)switch(w){case 0:w=2
return B.ac(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.Dd(new A.a9a(B.a([],x.y),B.a([],x.b)))
t=t.a
t.toString
t.ql(B.bg("while resolving an image"),e,null,!0,f)
return B.a0(null,v)}})
return B.a1($async$$3,v)},
$S(){return B.q(this.a).h("a3<~>(dM.T?,v,bH?)")}}
A.Y2.prototype={
OE(d,e){var w=0,v=B.a2(x.v),u,t=this,s
var $async$$2=B.X(function(f,g){if(f===1)return B.a_(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return B.a0(u,v)}})
return B.a1($async$$2,v)},
$2(d,e){return this.OE(d,e)},
$S:442}
A.Y0.prototype={
$5(d,e,f,g,h){this.a.$2(g,h)},
$S:443}
A.Y1.prototype={
$0(){var w,v,u,t,s=this,r=null
try{r=s.b.q0(s.c)}catch(u){w=B.T(u)
v=B.ai(u)
s.d.$2(w,v)
return}t=s.d
J.agU(r,new A.Y_(s.a,s.b,s.e,t),x.v).jZ(t)},
$S:0}
A.Y_.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=B.T(u)
v=B.ai(u)
t.d.$2(w,v)}},
$S(){return B.q(this.b).h("aq(dM.T)")}}
A.Y3.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:127}
A.Y4.prototype={
$0(){return this.a.pQ(0,this.b,$.j5.ga7F())},
$S:127}
A.Y8.prototype={
$1(d){return d.c},
$S:445}
A.Y9.prototype={
$1(d){return d.b},
$S:446}
A.a_d.prototype={
$2(d,e){this.a.ql(B.bg("resolving an image codec"),d,this.b,!0,e)},
$S:32}
A.a_e.prototype={
$2(d,e){this.a.ql(B.bg("loading an image"),d,this.b,!0,e)},
$S:32}
A.a_c.prototype={
$0(){this.a.Ip()},
$S:0};(function aliases(){var w=A.nE.prototype
w.QC=w.ad
w.QD=w.a3})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=A.nE.prototype,"gK1","ad",0)
v(u,"gaa6","aa7",1)
v(u=A.FP.prototype,"gXf","Xg",2)
v(u,"gX3","X4",3)
w(u,"gK1","ad",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.bv,[A.agv,A.aeo,A.Y6,A.Y0,A.Y_,A.Y8,A.Y9])
v(B.v,[A.dM,A.Et,A.Mq,A.fF,A.Mp,A.Mr,A.EZ])
u(A.o9,A.dM)
v(B.ed,[A.a_u,A.Y5,A.Y2,A.a_d,A.a_e])
v(B.mx,[A.us,A.q6])
v(B.fb,[A.Y1,A.Y3,A.Y4,A.a_c])
u(A.nE,A.Mq)
v(A.nE,[A.a9a,A.FP])
u(A.iO,A.Mp)
u(A.Y7,A.Mr)
w(A.Mp,B.af)
w(A.Mr,B.af)
w(A.Mq,B.af)})()
B.fs(b.typeUniverse,JSON.parse('{"o9":{"dM":["aii"],"dM.T":"aii"},"aii":{"dM":["aii"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=B.G
return{s:w("iD"),h:w("iO"),x:w("eG"),y:w("n<eG>"),b:w("n<~()>"),D:w("w"),B:w("c7<o9>"),C:w("d5<~(v,bH?)>"),F:w("d5<~(iO)>"),v:w("~")}})();(function constants(){D.w_=new A.us(0,"fill")
D.w0=new A.us(1,"contain")
D.ip=new A.us(6,"scaleDown")
D.z6=new A.Et(C.w,C.w)
D.zD=new A.q6(0,"repeat")
D.zE=new A.q6(1,"repeatX")
D.zF=new A.q6(2,"repeatY")
D.br=new A.q6(3,"noRepeat")})()}
$__dart_deferred_initializers__["HGErFzkSF/3esjB3CrObVzjYIoM="] = $__dart_deferred_initializers__.current
