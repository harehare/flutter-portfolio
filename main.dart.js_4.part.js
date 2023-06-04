self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aQ_(){var w=A.aRK("XMLHttpRequest",[])
w.toString
return x.e.a(w)},
qE:function qE(d,e,f){this.a=d
this.b=e
this.c=f},
a9A:function a9A(d,e,f){this.a=d
this.b=e
this.c=f},
a9B:function a9B(d){this.a=d},
aQR(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.Dr
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new B.J(s*t/q,t):new B.J(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new B.J(s,s*t/u):new B.J(q*u/t,q)
w=f
break
case 3:u=f.a
t=f.b
s=e.a
if(u/t>s/q){v=new B.J(s,s*t/u)
w=f}else{w=new B.J(u,q*u/s)
v=e}break
case 4:u=f.a
t=f.b
s=e.a
if(u/t>s/q){w=new B.J(s*t/q,t)
v=e}else{v=new B.J(q*u/t,q)
w=f}break
case 5:v=new B.J(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new B.J(u*r,u):e
q=f.a
if(w.a>q)w=new B.J(q,q/r)
v=e
break
default:v=null
w=null}return new A.Ky(v,w)},
y4:function y4(d,e){this.a=d
this.b=e},
Ky:function Ky(d,e){this.a=d
this.b=e},
aDh(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(b6.ga9(b6))return
w=b6.a
v=b6.c-w
u=b6.b
t=b6.d-u
s=new B.J(v,t)
r=b2.gbU(b2)
q=b2.gcf(b2)
if(b0==null)b0=D.kU
p=A.aQR(b0,new B.J(r,q).eu(0,b8),s)
o=p.a.ae(0,b8)
n=p.b
if(b7!==D.c9&&n.j(0,s))b7=D.c9
m=$.ap()
l=m.bt()
l.sz_(!1)
if(a7!=null)l.sQR(a7)
l.saw(0,B.aI9(0,0,0,b5))
l.snp(a9)
l.syY(b3)
k=n.a
j=(v-k)/2
i=n.b
h=(t-i)/2
t=a4.a
t=w+(j+(b1?-t:t)*j)
u+=h+a4.b*h
g=new B.y(t,u,t+k,u+i)
f=b7!==D.c9||b1
if(f)a5.c6(0)
if(b1){e=-(w+v/2)
a5.au(0,-e,0)
a5.dE(0,-1,1)
a5.au(0,e,0)}d=a4.ajv(o,new B.y(0,0,r,q))
if(b7===D.c9)a5.k5(b2,d,g,l)
else{a0=b7===D.mF||b7===D.iJ?C.hg:C.hi
a1=b7===D.mG||b7===D.iJ?C.hg:C.hi
a2=C.b.gI(A.aPO(b6,g,b7))
w=new Float64Array(16)
a3=new B.bk(w)
a3.da()
v=a2.a
u=a2.b
a3.dE(0,(a2.c-v)/(d.c-d.a),(a2.d-u)/(d.d-d.b))
a3.jG(v,u,0)
l.sAP(m.Rd(b2,a0,a1,w,a9))
a5.c2(b6,l)}if(f)a5.bJ(0)},
aPO(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.iJ
if(!k||f===D.mF){w=C.d.eY((d.a-p)/o)
v=C.d.e9((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.mG){u=C.d.eY((d.b-m)/l)
t=C.d.e9((d.d-n)/l)}else{u=0
t=0}q=B.a([],x.T)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.ci(new B.k(p,r*l)))
return q},
u7:function u7(d,e){this.a=d
this.b=e},
ayH(d,e){return new A.Mn("HTTP request failed, statusCode: "+d+", "+e.k(0))},
es:function es(){},
a6Z:function a6Z(d,e,f){this.a=d
this.b=e
this.c=f},
a7_:function a7_(d,e,f){this.a=d
this.b=e
this.c=f},
a6W:function a6W(d,e){this.a=d
this.b=e},
a6V:function a6V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6X:function a6X(d){this.a=d},
a6Y:function a6Y(d,e){this.a=d
this.b=e},
w9:function w9(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
aiW:function aiW(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
Mn:function Mn(d){this.b=d},
nJ(d,e,f,g,h){var w=new A.Md(h,g,B.a([],x.v),B.a([],x.u))
w.a17(d,e,f,g,h)
return w},
hF:function hF(d,e,f){this.a=d
this.b=e
this.c=f},
jY:function jY(d,e){this.a=d
this.b=e},
a70:function a70(){this.b=this.a=null},
Lf:function Lf(d){this.a=d},
qb:function qb(){},
a71:function a71(){},
a72:function a72(){},
Md:function Md(d,e,f,g){var _=this
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
a9i:function a9i(d,e){this.a=d
this.b=e},
a9j:function a9j(d,e){this.a=d
this.b=e},
a9h:function a9h(d){this.a=d},
Ti:function Ti(){},
Tk:function Tk(){},
Tj:function Tj(){},
axm(d,e,f){var w=B.a([e,f],x.f)
B.H(d,"addEventListener",w)},
axv(d){return d.status},
aRK(d,e){var w=self.window[d]
if(w==null)return null
return B.mL(w,e)}},B,J,C,D
A=a.updateHolder(c[13],A)
B=c[0]
J=c[1]
C=c[2]
D=c[21]
A.qE.prototype={
ut(d){return new B.ce(this,x.i)},
pX(d,e,f){var w=null,v=B.Po(w,w,w,x.r)
return A.nJ(new B.eB(v,B.o(v).h("eB<1>")),this.lz(e,w,w,f,v),e.a,w,e.b)},
pY(d,e){var w=null,v=B.Po(w,w,w,x.r)
return A.nJ(new B.eB(v,B.o(v).h("eB<1>")),this.lz(d,w,e,w,v),d.a,w,d.b)},
pZ(d,e){var w=null,v=B.Po(w,w,w,x.r)
return A.nJ(new B.eB(v,B.o(v).h("eB<1>")),this.lz(d,e,w,w,v),d.a,w,d.b)},
lz(d,e,f,g,h){return this.a8y(d,e,f,g,h)},
a8y(d,e,f,g,h){var w=0,v=B.W(x.p),u,t,s,r,q,p,o,n
var $async$lz=B.R(function(i,j){if(i===1)return B.T(j,v)
while(true)switch(w){case 0:p=d.a
o=B.agu().a4(p)
w=self.window.flutterCanvasKit!=null||!1?3:5
break
case 3:t=new B.ai($.af,x.k)
s=new B.bl(t,x.t)
r=A.aQ_()
r.open("GET",p,!0)
r.responseType="arraybuffer"
A.axm(r,"load",B.ba(new A.a9A(r,s,o)))
A.axm(r,"error",B.ba(s.gQV()))
r.send()
w=6
return B.Y(t,$async$lz)
case 6:q=B.cT(x.J.a(r.response),0,null)
if(q.byteLength===0){p=A.axv(r)
p.toString
throw B.c(A.ayH(p,o))}w=e!=null?7:9
break
case 7:n=e
w=10
return B.Y(B.u9(q),$async$lz)
case 10:u=n.$1(j)
w=1
break
w=8
break
case 9:w=f!=null?11:13
break
case 11:n=f
w=14
return B.Y(B.u9(q),$async$lz)
case 14:u=n.$1(j)
w=1
break
w=12
break
case 13:u=g.$1(q)
w=1
break
case 12:case 8:w=4
break
case 5:u=$.ap().T8(o,new A.a9B(h))
w=1
break
case 4:case 1:return B.U(u,v)}})
return B.V($async$lz,v)},
j(d,e){if(e==null)return!1
if(J.P(e)!==B.x(this))return!1
return e instanceof A.qE&&e.a===this.a&&e.b===this.b},
gu(d){return B.M(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.y4.prototype={
H(){return"BoxFit."+this.b}}
A.Ky.prototype={}
A.u7.prototype={
H(){return"ImageRepeat."+this.b}}
A.es.prototype={
a4(d){var w=new A.a70()
this.a3i(d,new A.a6Z(this,d,w),new A.a7_(this,d,w))
return w},
a3i(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new A.a6W(r,f)
v=null
try{v=this.ut(d)}catch(s){u=B.a5(s)
t=B.au(s)
w.$2(u,t)
return}v.bD(new A.a6V(r,this,e,w),x.H).n2(w)},
uI(d,e,f,g){var w,v
if(e.a!=null){w=$.hN.lW$
w===$&&B.b()
w.Uo(0,f,new A.a6X(e),g)
return}w=$.hN.lW$
w===$&&B.b()
v=w.Uo(0,f,new A.a6Y(this,f),g)
if(v!=null)e.Iw(v)},
pX(d,e,f){throw B.c(B.O("Implement loadBuffer for faster image loading"))},
pY(d,e){return new A.w9(B.a([],x.v),B.a([],x.u))},
pZ(d,e){return new A.w9(B.a([],x.v),B.a([],x.u))},
k(d){return"ImageConfiguration()"}}
A.w9.prototype={}
A.aiW.prototype={}
A.Mn.prototype={
k(d){return this.b},
$ib3:1}
A.hF.prototype={
ea(d){return new A.hF(this.a.ea(0),this.b,this.c)},
gXv(){var w=this.a
return w.gcf(w)*w.gbU(w)*4},
m(){this.a.m()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+B.i0(this.b)+"x"},
gu(d){return B.M(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.P(e)!==B.x(w))return!1
return e instanceof A.hF&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
A.jY.prototype={}
A.a70.prototype={
Iw(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.Y(w,d.gxo(d))
v.a.f=!1}},
O(d,e){var w=this.a
if(w!=null)return w.O(0,e)
w=this.b;(w==null?this.b=B.a([],x.v):w).push(e)},
J(d,e){var w,v=this.a
if(v!=null)return v.J(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.e(v[w],e)){v=this.b
v.toString
C.b.c4(v,w)
break}}}
A.Lf.prototype={
a12(d){++this.a.r},
m(){var w=this.a;--w.r
w.we()
this.a=null}}
A.qb.prototype={
O(d,e){var w,v,u,t,s,r,q,p=this
if(p.w)B.a_(B.ad(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.ea(0)
r=p.f
e.a.$2(s,!r)}catch(q){w=B.a5(q)
v=B.au(q)
p.UK(B.bs("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{r=e.c
r.toString
r.$2(s.a,s.b)}catch(w){u=B.a5(w)
t=B.au(w)
if(!J.e(u,p.c.a))B.d8(new B.bA(u,t,"image resource service",B.bs("by a synchronously-called image error listener"),null,!1))}},
GD(){if(this.w)B.a_(B.ad(y.a));++this.r
return new A.Lf(this)},
J(d,e){var w,v,u,t,s,r=this
if(r.w)B.a_(B.ad(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.e(w[v],e)){C.b.c4(w,v)
break}if(w.length===0){w=r.x
u=B.a(w.slice(0),B.Q(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,B.G)(u),++s)u[s].$0()
C.b.P(w)
r.we()}},
we(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.m()
v.b=null
v.w=!0},
aeu(d){if(this.w)B.a_(B.ad(y.a))
this.x.push(d)},
UA(d){if(this.w)B.a_(B.ad(y.a))
C.b.A(this.x,d)},
Xa(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)B.a_(B.ad(y.a))
t=m.b
if(t!=null)t.a.m()
m.b=d
t=m.a
if(t.length===0)return
s=B.am(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.al3(new A.hF(r.ea(0),q,p),!1)}catch(n){v=B.a5(n)
u=B.au(n)
m.UK(B.bs("by an image listener"),v,u)}}},
uH(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new B.bA(e,h,m,d,f,g)
s=this.a
r=x.I
q=B.am(new B.cI(new B.a0(s,new A.a71(),B.Q(s).h("a0<1,~(E,cA?)?>")),r),!0,r.h("m.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=B.a5(o)
t=B.au(o)
if(!J.e(u,e)){r=B.bs("when reporting an error to an image listener")
n=$.iO()
if(n!=null)n.$1(new B.bA(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
B.d8(s)}},
UK(d,e,f){return this.uH(d,e,null,!1,f)},
amr(d){var w,v,u,t
if(this.w)B.a_(B.ad(y.a))
w=this.a
if(w.length!==0){v=x.s
u=B.am(new B.cI(new B.a0(w,new A.a72(),B.Q(w).h("a0<1,~(jY)?>")),v),!0,v.h("m.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
A.Md.prototype={
a17(d,e,f,g,h){var w=this
w.d=f
e.fm(w.ga5A(),new A.a9i(w,g),x.H)
if(d!=null)w.y=d.ma(w.gamq(),new A.a9j(w,g))},
a5B(d){this.z=d
if(this.a.length!==0)this.oq()},
a5o(d){var w,v,u,t=this
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){v=t.ax
v===$&&B.b()
v=d.a-v.a>=w.a}else v=!0
if(v){w=t.at
t.Lm(new A.hF(w.gis(w).ea(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.gyn(w)
w=t.at
w.gis(w).m()
t.at=null
u=C.e.iN(t.ch,t.z.gtV())
if(t.z.gzU()===-1||u<=t.z.gzU())t.oq()
return}w.toString
v=t.ax
v===$&&B.b()
t.CW=B.cn(new B.aU(C.e.bB(w.a-(d.a-v.a))),new A.a9h(t))},
oq(){var w=0,v=B.W(x.H),u,t=2,s,r=this,q,p,o,n,m
var $async$oq=B.R(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:n=r.at
if(n!=null)n.gis(n).m()
r.at=null
t=4
w=7
return B.Y(r.z.jE(),$async$oq)
case 7:r.at=e
t=2
w=6
break
case 4:t=3
m=s
q=B.a5(m)
p=B.au(m)
r.uH(B.bs("resolving an image frame"),q,r.as,!0,p)
w=1
break
w=6
break
case 3:w=2
break
case 6:if(r.z.gtV()===1){if(r.a.length===0){w=1
break}n=r.at
r.Lm(new A.hF(n.gis(n).ea(0),r.Q,r.d))
n=r.at
n.gis(n).m()
r.at=null
w=1
break}r.O6()
case 1:return B.U(u,v)
case 2:return B.T(s,v)}})
return B.V($async$oq,v)},
O6(){if(this.cx)return
this.cx=!0
$.c2.AB(this.ga5n())},
Lm(d){this.Xa(d);++this.ch},
O(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gtV()>1
else w=!1}else w=!1
if(w)v.oq()
v.YH(0,e)},
J(d,e){var w,v=this
v.YI(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.av(0)
v.CW=null}},
we(){var w,v=this
v.YG()
if(v.w){w=v.y
if(w!=null)w.nE(null)
w=v.y
if(w!=null)w.av(0)
v.y=null}}}
A.Ti.prototype={}
A.Tk.prototype={}
A.Tj.prototype={}
var z=a.updateTypes(["~(fw)","~(jY)","~(em)","~(aU)"])
A.a9A.prototype={
$1(d){var w,v,u,t=this.a,s=t.status
s.toString
w=s>=200&&s<300
v=s>307&&s<400
u=w||s===0||s===304||v
s=this.b
if(u)s.d2(0,t)
else{s.lN(d)
t=A.axv(t)
if(t==null)t=400
throw B.c(A.ayH(t,this.c))}},
$S:1}
A.a9B.prototype={
$2(d,e){this.a.G(0,new A.jY(d,e))},
$S:525}
A.a6Z.prototype={
$2(d,e){this.a.uI(this.b,this.c,d,e)},
$S(){return B.o(this.a).h("~(es.T,~(E,cA?))")}}
A.a7_.prototype={
$3(d,e,f){return this.Wc(d,e,f)},
Wc(d,e,f){var w=0,v=B.W(x.H),u=this,t
var $async$$3=B.R(function(g,h){if(g===1)return B.T(h,v)
while(true)switch(w){case 0:w=2
return B.Y(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.Iw(new A.aiW(B.a([],x.v),B.a([],x.u)))
t=t.a
t.toString
t.uH(B.bs("while resolving an image"),e,null,!0,f)
return B.U(null,v)}})
return B.V($async$$3,v)},
$S(){return B.o(this.a).h("a6<~>(es.T?,E,cA?)")}}
A.a6W.prototype={
Wb(d,e){var w=0,v=B.W(x.H),u,t=this,s
var $async$$2=B.R(function(f,g){if(f===1)return B.T(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}s.b=!0
t.b.$3(s.a,d,e)
case 1:return B.U(u,v)}})
return B.V($async$$2,v)},
$2(d,e){return this.Wb(d,e)},
$S:526}
A.a6V.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=B.a5(u)
v=B.au(u)
t.d.$2(w,v)}},
$S(){return B.o(this.b).h("aM(es.T)")}}
A.a6X.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:156}
A.a6Y.prototype={
$0(){var w=this.a,v=this.b,u=w.pZ(v,$.hN.gajF())
if(u instanceof A.w9){u=w.pY(v,$.hN.gajD())
if(u instanceof A.w9)u=w.pX(0,v,$.hN.gajA())}return u},
$S:156}
A.a71.prototype={
$1(d){return d.c},
$S:528}
A.a72.prototype={
$1(d){return d.b},
$S:529}
A.a9i.prototype={
$2(d,e){this.a.uH(B.bs("resolving an image codec"),d,this.b,!0,e)},
$S:33}
A.a9j.prototype={
$2(d,e){this.a.uH(B.bs("loading an image"),d,this.b,!0,e)},
$S:33}
A.a9h.prototype={
$0(){this.a.O6()},
$S:0};(function aliases(){var w=A.qb.prototype
w.YH=w.O
w.YI=w.J
w.YG=w.we})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=A.qb.prototype,"gxo","O",0)
v(u,"gamq","amr",1)
v(u=A.Md.prototype,"ga5A","a5B",2)
v(u,"ga5n","a5o",3)
w(u,"gxo","O",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.E,[A.es,A.Ky,A.Tj,A.Mn,A.hF,A.Ti,A.Tk,A.Lf])
u(A.qE,A.es)
v(B.eG,[A.a9A,A.a7_,A.a6V,A.a71,A.a72])
v(B.fo,[A.a9B,A.a6Z,A.a6W,A.a9i,A.a9j])
v(B.oH,[A.y4,A.u7])
v(B.hz,[A.a6X,A.a6Y,A.a9h])
u(A.qb,A.Tj)
v(A.qb,[A.w9,A.aiW,A.Md])
u(A.jY,A.Ti)
u(A.a70,A.Tk)
w(A.Ti,B.ab)
w(A.Tk,B.ab)
w(A.Tj,B.ab)})()
B.fY(b.typeUniverse,JSON.parse('{"qE":{"es":["atw"],"es.T":"atw"},"atw":{"es":["atw"]},"Mn":{"b3":[]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=B.I
return{J:w("y7"),p:w("em"),r:w("jY"),x:w("fw"),v:w("n<fw>"),f:w("n<E>"),T:w("n<y>"),u:w("n<~()>"),e:w("d"),i:w("ce<qE>"),I:w("cI<~(E,cA?)>"),s:w("cI<~(jY)>"),t:w("bl<d>"),k:w("ai<d>"),H:w("~")}})();(function constants(){D.zx=new A.y4(0,"fill")
D.zy=new A.y4(1,"contain")
D.kU=new A.y4(6,"scaleDown")
D.Dr=new A.Ky(C.H,C.H)
D.iJ=new A.u7(0,"repeat")
D.mF=new A.u7(1,"repeatX")
D.mG=new A.u7(2,"repeatY")
D.c9=new A.u7(3,"noRepeat")})()}
$__dart_deferred_initializers__["mN2i7PSY99pIV0stpF37vtCBiw8="] = $__dart_deferred_initializers__.current
