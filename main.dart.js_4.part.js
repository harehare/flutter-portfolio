self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
alu(d,e){var w=0,v=B.Y(x.p),u,t
var $async$alu=B.T(function(f,g){if(f===1)return B.V(g,v)
while(true)switch(w){case 0:w=3
return B.a_(A.aLc(d,e),$async$alu)
case 3:t=g
if($.apJ()){u=B.GW(t,d,null,null)
w=1
break}else{u=B.ard(t,d)
w=1
break}case 1:return B.W(u,v)}})
return B.X($async$alu,v)},
aLc(d,e){var w,v=new B.aa($.a9,x.E),u=new B.aX(v,x.Z),t=$.azr().$0()
C.fU.Dr(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.D
B.bD(t,"progress",new A.akm(e),!1,w)
B.bD(t,"error",new A.akn(u,d),!1,w)
B.bD(t,"load",new A.ako(t,u,d),!1,w)
t.send()
return v},
aLo(d,e){var w,v={},u=new B.aa($.a9,e.h("aa<0>"))
v.a=!0
w=d.$1(new A.akv(v,new B.EK(u,e.h("EK<0>")),e))
v.a=!1
if(w!=null)throw B.c(B.bV(w))
return u},
akx:function akx(){},
akm:function akm(d){this.a=d},
akn:function akn(d,e){this.a=d
this.b=e},
ako:function ako(d,e,f){this.a=d
this.b=e
this.c=f},
akv:function akv(d,e,f){this.a=d
this.b=e
this.c=f},
aMz(d,e){if($.aQ())return A.alu(d.j(0),e)
else return A.aLo(new A.alF(d,e),x.p)},
alF:function alF(d,e){this.a=d
this.b=e},
pC:function pC(d,e,f){this.a=d
this.b=e
this.c=f},
a4j:function a4j(d){this.a=d},
aKt(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.B1
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new B.Q(s*t/q,t):new B.Q(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new B.Q(s,s*t/u):new B.Q(q*u/t,q)
w=f
break
case 3:q=e.a
u=f.a
t=q*f.b/u
v=new B.Q(q,t)
w=new B.Q(u,t*u/q)
break
case 4:u=f.b
t=q*f.a/u
v=new B.Q(t,q)
w=new B.Q(t*u/q,u)
break
case 5:v=new B.Q(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new B.Q(u*r,u):e
q=f.a
if(w.a>q)w=new B.Q(q,q/r)
v=e
break
default:v=null
w=null}return new A.IC(v,w)},
ru:function ru(d,e){this.a=d
this.b=e},
IC:function IC(d,e){this.a=d
this.b=e},
awC(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b2.gV(b2))return
w=b2.a
v=b2.c-w
u=b2.b
t=b2.d-u
s=new B.Q(v,t)
r=a8.gaI(a8)
q=a8.gbt(a8)
if(a6==null)a6=D.m2
p=A.aKt(a6,new B.Q(r,q).eA(0,b4),s)
o=p.a.a4(0,b4)
n=p.b
if(b3!==D.bG&&n.k(0,s))b3=D.bG
m=$.aQ()?B.bo():new B.bd(new B.bj())
m.swc(!1)
if(a3!=null)m.sMx(a3)
m.sam(0,new B.M(((C.f.bO(b1*255,1)&255)<<24|0)>>>0))
m.slZ(a5)
m.swa(a9)
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a7?-t:t)*k)
u+=i+a0.b*i
h=new B.z(t,u,t+l,u+j)
g=b3!==D.bG||a7
if(g)a1.bA(0)
u=b3===D.bG
if(!u)a1.kB(0,b2)
if(a7){f=-(w+v/2)
a1.ao(0,-f,0)
a1.cK(0,-1,1)
a1.ao(0,f,0)}e=a0.aeb(o,new B.z(0,0,r,q))
if(u)a1.iI(a8,e,h,m)
else for(w=A.aJA(b2,h,b3),v=w.length,d=0;d<w.length;w.length===v||(0,B.F)(w),++d)a1.iI(a8,e,w[d],m)
if(g)a1.bu(0)},
aJA(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.BS
if(!k||f===D.BT){w=C.e.eQ((d.a-p)/o)
v=C.e.eL((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.BU){u=C.e.eQ((d.b-m)/l)
t=C.e.eL((d.d-n)/l)}else{u=0
t=0}q=B.a([],x.T)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.c6(new B.q(p,r*l)))
return q},
p8:function p8(d,e){this.a=d
this.b=e},
e5:function e5(){},
a1N:function a1N(d,e,f){this.a=d
this.b=e
this.c=f},
a1O:function a1O(d,e,f){this.a=d
this.b=e
this.c=f},
a1K:function a1K(d,e){this.a=d
this.b=e},
a1J:function a1J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1L:function a1L(d){this.a=d},
a1M:function a1M(d,e){this.a=d
this.b=e},
adV:function adV(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
anf(d,e,f,g,h){var w=new A.K2(h,g,B.a([],x.v),B.a([],x.u))
w.Y5(d,e,f,g,h)
return w},
hm:function hm(d,e,f){this.a=d
this.b=e
this.c=f},
jJ:function jJ(d,e){this.a=d
this.b=e},
a1P:function a1P(){this.b=this.a=null},
Ja:function Ja(d){this.a=d},
p9:function p9(){},
a1Q:function a1Q(){},
a1R:function a1R(){},
K2:function K2(d,e,f,g){var _=this
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
a44:function a44(d,e){this.a=d
this.b=e},
a45:function a45(d,e){this.a=d
this.b=e},
a43:function a43(d){this.a=d},
Qf:function Qf(){},
Qh:function Qh(){},
Qg:function Qg(){}},B,J,C,D
A=a.updateHolder(c[13],A)
B=c[0]
J=c[1]
C=c[2]
D=c[19]
A.pC.prototype={
r8(d){return new B.ce(this,x.i)},
qT(d,e,f){var w=null,v=B.anE(w,w,w,x.r)
return A.anf(new B.h1(v,B.p(v).h("h1<1>")),this.zT(e,f,v),e.a,w,e.b)},
zT(d,e,f){return this.a4H(d,e,f)},
a4H(d,e,f){var w=0,v=B.Y(x.p),u,t,s
var $async$zT=B.T(function(g,h){if(g===1)return B.V(h,v)
while(true)switch(w){case 0:t=B.abL().P(d.a)
s=A.aMz(t,new A.a4j(f))
u=s
w=1
break
case 1:return B.W(u,v)}})
return B.X($async$zT,v)},
k(d,e){if(e==null)return!1
if(J.S(e)!==B.A(this))return!1
return e instanceof A.pC&&e.a===this.a&&e.b===this.b},
gv(d){return B.a6(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.ru.prototype={
j(d){return"BoxFit."+this.b}}
A.IC.prototype={}
A.p8.prototype={
j(d){return"ImageRepeat."+this.b}}
A.e5.prototype={
P(d){var w=new A.a1P()
this.a_P(d,new A.a1N(this,d,w),new A.a1O(this,d,w))
return w},
a_P(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new A.a1K(r,f)
v=null
try{v=this.r8(d)}catch(s){u=B.a2(s)
t=B.at(s)
w.$2(u,t)
return}J.amg(v,new A.a1J(r,this,e,w),x.H).kA(w)},
rw(d,e,f,g){var w,v="_imageCache"
if(e.a!=null){B.b($.k3.kN$,v).Pt(0,f,new A.a1L(e),g)
return}w=B.b($.k3.kN$,v).Pt(0,f,new A.a1M(this,f),g)
if(w!=null)e.F2(w)},
j(d){return"ImageConfiguration()"}}
A.adV.prototype={}
A.hm.prototype={
dE(d){return new A.hm(this.a.dE(0),this.b,this.c)},
gSA(){var w=this.a
return w.gbt(w)*w.gaI(w)*4},
n(d){this.a.n(0)},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+B.jg(this.b)+"x"},
gv(d){return B.a6(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.S(e)!==B.A(w))return!1
return e instanceof A.hm&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
A.jJ.prototype={}
A.a1P.prototype={
F2(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.a3(w,d.gM2(d))
v.a.f=!1}},
a6(d,e){var w=this.a
if(w!=null)return w.a6(0,e)
w=this.b;(w==null?this.b=B.a([],x.v):w).push(e)},
R(d,e){var w,v=this.a
if(v!=null)return v.R(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.h(v[w],e)){v=this.b
v.toString
C.b.bz(v,w)
break}}}
A.Ja.prototype={
Xr(d){++this.a.r},
n(d){var w=this.a;--w.r
w.u6()
this.a=null}}
A.p9.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
if(p.w)B.L(B.a3(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dE(0)
r=p.f
e.a.$2(s,!r)}catch(q){w=B.a2(q)
v=B.at(q)
p.PJ(B.bp("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{r=e.c
r.toString
r.$2(s.a,s.b)}catch(w){u=B.a2(w)
t=B.at(w)
if(!J.h(u,p.c.a))B.dz(new B.bB(u,t,"image resource service",B.bp("by a synchronously-called image error listener"),null,!1))}},
D_(){if(this.w)B.L(B.a3(y.a));++this.r
return new A.Ja(this)},
R(d,e){var w,v,u,t,s,r=this
if(r.w)B.L(B.a3(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.h(w[v],e)){C.b.bz(w,v)
break}if(w.length===0){w=r.x
u=B.a(w.slice(0),B.R(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,B.F)(u),++s)u[s].$0()
C.b.sm(w,0)
r.u6()}},
u6(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.n(0)
v.b=null
v.w=!0},
a9z(d){if(this.w)B.L(B.a3(y.a))
this.x.push(d)},
PC(d){if(this.w)B.L(B.a3(y.a))
C.b.C(this.x,d)},
Sa(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)B.L(B.a3(y.a))
t=m.b
if(t!=null)t.a.n(0)
m.b=d
t=m.a
if(t.length===0)return
s=B.af(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.afr(new A.hm(r.dE(0),q,p),!1)}catch(n){v=B.a2(n)
u=B.at(n)
m.PJ(B.bp("by an image listener"),v,u)}}},
ru(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new B.bB(e,h,m,d,f,g)
s=this.a
r=x.I
q=B.af(new B.ds(new B.a5(s,new A.a1Q(),B.R(s).h("a5<1,~(B,cI?)?>")),r),!0,r.h("o.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=B.a2(o)
t=B.at(o)
if(!J.h(u,e)){r=B.bp("when reporting an error to an image listener")
n=$.iv()
if(n!=null)n.$1(new B.bB(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
B.dz(s)}},
PJ(d,e,f){return this.ru(d,e,null,!1,f)},
agL(d){var w,v,u,t
if(this.w)B.L(B.a3(y.a))
w=this.a
if(w.length!==0){v=x.s
u=B.af(new B.ds(new B.a5(w,new A.a1R(),B.R(w).h("a5<1,~(jJ)?>")),v),!0,v.h("o.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
A.K2.prototype={
Y5(d,e,f,g,h){var w=this
w.d=f
e.fd(0,w.ga23(),new A.a44(w,g),x.H)
if(d!=null)w.y=d.l_(w.gagK(),new A.a45(w,g))},
a24(d){this.z=d
if(this.a.length!==0)this.mY()},
a1T(d){var w,v,u,t=this,s="_shownTimestamp"
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){w=B.b(t.ax,s).a
v=t.ay
w=d.a-w>=v.a}else{v=w
w=!0}if(w){w=t.at
t.HM(new A.hm(w.gf7(w).dE(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.gvG(w)
w=t.at
w.gf7(w).n(0)
t.at=null
w=t.ch
v=t.z
u=C.f.ji(w,v.gm1(v))
w=t.z
if(w.gor(w)!==-1){w=t.z
w=u<=w.gor(w)}else w=!0
if(w)t.mY()
return}v.toString
t.CW=B.c6(new B.aR(C.e.aT((v.a-(d.a-B.b(t.ax,s).a))*$.avI)),new A.a43(t))},
mY(){var w=0,v=B.Y(x.H),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$mY=B.T(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.at
if(m!=null)m.gf7(m).n(0)
q.at=null
t=4
w=7
return B.a_(q.z.ja(),$async$mY)
case 7:q.at=e
t=2
w=6
break
case 4:t=3
l=s
p=B.a2(l)
o=B.at(l)
q.ru(B.bp("resolving an image frame"),p,q.as,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=q.z
if(m.gm1(m)===1){if(q.a.length===0){w=1
break}m=q.at
q.HM(new A.hm(m.gf7(m).dE(0),q.Q,q.d))
m=q.at
m.gf7(m).n(0)
q.at=null
w=1
break}q.Kf()
case 1:return B.W(u,v)
case 2:return B.V(s,v)}})
return B.X($async$mY,v)},
Kf(){if(this.cx)return
this.cx=!0
$.c5.EO(this.ga1S())},
HM(d){this.Sa(d);++this.ch},
a6(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gm1(w)>1
else w=!1}else w=!1
if(w)v.mY()
v.TI(0,e)},
R(d,e){var w,v=this
v.TJ(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.ag(0)
v.CW=null}},
u6(){var w,v=this
v.TH()
if(v.w){w=v.y
if(w!=null)w.md(null)
w=v.y
if(w!=null)w.ag(0)
v.y=null}}}
A.Qf.prototype={}
A.Qh.prototype={}
A.Qg.prototype={}
var z=a.updateTypes(["~(fi)","~(jJ)","~(fI)","~(aR)"])
A.akx.prototype={
$0(){return new XMLHttpRequest()},
$S:455}
A.akm.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:39}
A.akn.prototype={
$1(d){this.a.hY(new B.tk(y.e+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:39}
A.ako.prototype={
$1(d){var w,v,u=this,t=u.a,s=t.status
s.toString
w=s>=200&&s<300
v=s>307&&s<400
if(!(w||s===0||s===304||v)){u.b.hY(new B.tk(y.e+u.c+"\nServer response code: "+s))
return}u.b.cl(0,B.ct(x.J.a(B.aoo(t.response)),0,null))},
$S:39}
A.akv.prototype={
$1(d){var w="operation failed"
if(d==null)if(this.a.a)throw B.c(B.bV(w))
else this.b.hY(new B.D8(w))
else this.b.cl(0,d)},
$S(){return this.c.h("~(0?)")}}
A.alF.prototype={
$1(d){d.$1(new B.yT(this.a.j(0),this.b))
return null},
$S:456}
A.a4j.prototype={
$2(d,e){this.a.E(0,new A.jJ(d,e))},
$S:143}
A.a1N.prototype={
$2(d,e){this.a.rw(this.b,this.c,d,e)},
$S(){return B.p(this.a).h("~(e5.T,~(B,cI?))")}}
A.a1O.prototype={
$3(d,e,f){return this.QY(d,e,f)},
QY(d,e,f){var w=0,v=B.Y(x.H),u=this,t
var $async$$3=B.T(function(g,h){if(g===1)return B.V(h,v)
while(true)switch(w){case 0:w=2
return B.a_(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.F2(new A.adV(B.a([],x.v),B.a([],x.u)))
t=t.a
t.toString
t.ru(B.bp("while resolving an image"),e,null,!0,f)
return B.W(null,v)}})
return B.X($async$$3,v)},
$S(){return B.p(this.a).h("a4<~>(e5.T?,B,cI?)")}}
A.a1K.prototype={
QX(d,e){var w=0,v=B.Y(x.H),u,t=this,s
var $async$$2=B.T(function(f,g){if(f===1)return B.V(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return B.W(u,v)}})
return B.X($async$$2,v)},
$2(d,e){return this.QX(d,e)},
$S:457}
A.a1J.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=B.a2(u)
v=B.at(u)
t.d.$2(w,v)}},
$S(){return B.p(this.b).h("aw(e5.T)")}}
A.a1L.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:145}
A.a1M.prototype={
$0(){return this.a.qT(0,this.b,$.k3.gaef())},
$S:145}
A.a1Q.prototype={
$1(d){return d.c},
$S:459}
A.a1R.prototype={
$1(d){return d.b},
$S:460}
A.a44.prototype={
$2(d,e){this.a.ru(B.bp("resolving an image codec"),d,this.b,!0,e)},
$S:38}
A.a45.prototype={
$2(d,e){this.a.ru(B.bp("loading an image"),d,this.b,!0,e)},
$S:38}
A.a43.prototype={
$0(){this.a.Kf()},
$S:0};(function aliases(){var w=A.p9.prototype
w.TI=w.a6
w.TJ=w.R
w.TH=w.u6})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=A.p9.prototype,"gM2","a6",0)
v(u,"gagK","agL",1)
v(u=A.K2.prototype,"ga23","a24",2)
v(u,"ga1S","a1T",3)
w(u,"gM2","a6",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.fH,[A.akx,A.a1L,A.a1M,A.a43])
v(B.bF,[A.akm,A.akn,A.ako,A.akv,A.alF,A.a1O,A.a1J,A.a1Q,A.a1R])
v(B.B,[A.e5,A.IC,A.Qg,A.hm,A.Qf,A.Qh,A.Ja])
u(A.pC,A.e5)
v(B.eG,[A.a4j,A.a1N,A.a1K,A.a44,A.a45])
v(B.lY,[A.ru,A.p8])
u(A.p9,A.Qg)
v(A.p9,[A.adV,A.K2])
u(A.jJ,A.Qf)
u(A.a1P,A.Qh)
w(A.Qf,B.am)
w(A.Qh,B.am)
w(A.Qg,B.am)})()
B.h5(b.typeUniverse,JSON.parse('{"pC":{"e5":["ang"],"e5.T":"ang"},"ru":{"I":[]},"p8":{"I":[]},"ang":{"e5":["ang"]}}'))
var y={e:"Failed to load network image.\nImage URL: ",a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=B.E
return{J:w("oA"),p:w("fI"),r:w("jJ"),x:w("fi"),v:w("l<fi>"),T:w("l<z>"),u:w("l<~()>"),D:w("fT"),i:w("ce<pC>"),I:w("ds<~(B,cI?)>"),s:w("ds<~(jJ)>"),Z:w("aX<dc>"),E:w("aa<dc>"),H:w("~")}})();(function constants(){D.wD=new A.ru(0,"fill")
D.wE=new A.ru(1,"contain")
D.m2=new A.ru(6,"scaleDown")
D.B1=new A.IC(C.v,C.v)
D.BS=new A.p8(0,"repeat")
D.BT=new A.p8(1,"repeatX")
D.BU=new A.p8(2,"repeatY")
D.bG=new A.p8(3,"noRepeat")})();(function lazyInitializers(){var w=a.lazy
w($,"aQV","azr",()=>new A.akx())})()}
$__dart_deferred_initializers__["f4HSuJP+xh9MsWo7HHCMMwz33F4="] = $__dart_deferred_initializers__.current
