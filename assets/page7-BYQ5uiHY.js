import{S as w,P as v,W as h,B as x,M as f,T as S,b as g,c as p,v as P,E as C,R as B,a as M}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */import{Q as u}from"./QuantizedDither-B5B4gs4j.js";const y={name:"BasicShader",uniforms:{texture1:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;

			gl_Position =   projectionMatrix * modelViewMatrix * vec4(position,1.0);
		}`,fragmentShader:`
	
		uniform sampler2D texture1;

		varying vec2 vUv;

		void main() {
			gl_FragColor = texture(texture1, vUv);
		}`},c=new w,o=new v(75,window.innerWidth/window.innerHeight,.1,1e3),e=new h;e.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(e.domElement);window.addEventListener("resize",z,!1);const E=new x(1,1,1);new f({color:65280});var l=new S;const i=l.load("Textures/battle ui.jpg"),W=l.load("Textures/Portland/roo.jpg"),t=new g({uniforms:{texture1:{value:i},testFloat:{value:.5}},vertexShader:y.vertexShader,fragmentShader:document.getElementById("fragmentShader").textContent});c.background=l.load("Textures/portland.jpg");const r=new p(E,t);c.add(r);o.position.z=2;var m=.01;const s=document.getElementById("swapButton");s.addEventListener("click",()=>{b()});const d=document.getElementById("rooButton");d.addEventListener("click",()=>{H()});const R=P(window.innerWidth/2,window.innerHeight/2);u.uniforms.iResolution=R;u.uniforms.useCustomPalette.value=-1;const a=new C(e),T=new B(c,o),n=new M(u);a.addPass(T);a.addPass(n);a.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(L);function z(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function L(){r.rotation.x+=m,r.rotation.y+=m,a.render()}function b(){n.material.uniforms.useCustomPalette.value<0?(n.material.uniforms.useCustomPalette.value=1,s.textContent="Switch to Standard"):(n.material.uniforms.useCustomPalette.value=-1,s.textContent="Switch to Set Palette")}function H(){t.uniforms.texture1.value==i?(t.uniforms.texture1.value=W,d.textContent="Switch to SMT V"):(t.uniforms.texture1.value=i,d.textContent="Switch to Roo")}
