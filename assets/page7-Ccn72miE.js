import{S as m,P as w,W as c,B as v,M as h,T as f,b as x,c as g,v as p,E as S,R as P,a as C}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */import{Q as r}from"./QuantizedDither-B5B4gs4j.js";const M={name:"BasicShader",uniforms:{texture1:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;

			gl_Position =   projectionMatrix * modelViewMatrix * vec4(position,1.0);
		}`,fragmentShader:`
	
		uniform sampler2D texture1;

		varying vec2 vUv;

		void main() {
			gl_FragColor = texture(texture1, vUv);
		}`},s=new m,n=new w(75,window.innerWidth/window.innerHeight,.1,1e3),e=new c;e.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(e.domElement);window.addEventListener("resize",b,!1);const W=new v(1,1,1);new h({color:65280});var d=new f;s.background=d.load("Textures/portland.jpg");const l=new x({uniforms:{texture1:{value:d.load("Textures/battle ui.png")},testFloat:{value:.5}},vertexShader:M.vertexShader,fragmentShader:document.getElementById("fragmentShader").textContent});l.uniforms.texture1.value=d.load("Textures/battle ui.png");const i=new g(W,l);s.add(i);n.position.z=2;var u=.01;const o=document.getElementById("swapButton");o.addEventListener("click",()=>{E()});const y=p(window.innerWidth/2,window.innerHeight/2);r.uniforms.iResolution=y;r.uniforms.useCustomPalette.value=-1;const a=new S(e),B=new P(s,n),t=new C(r);a.addPass(B);a.addPass(t);a.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(z);function b(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function z(){i.rotation.x+=u,i.rotation.y+=u,a.render()}function E(){t.material.uniforms.useCustomPalette.value<0?(t.material.uniforms.useCustomPalette.value=1,o.textContent="Switch to Standard"):(t.material.uniforms.useCustomPalette.value=-1,o.textContent="Switch to Set Palette")}
