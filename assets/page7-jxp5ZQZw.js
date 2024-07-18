import{S as m,P as w,W as c,B as l,M as h,T as v,b as f,c as p,v as g,E as x,R as S,a as P}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */import{Q as r}from"./QuantizedDither-B5B4gs4j.js";const C={name:"BasicShader",uniforms:{texture1:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;

			gl_Position =   projectionMatrix * modelViewMatrix * vec4(position,1.0);
		}`,fragmentShader:`
	
		uniform sampler2D texture1;

		varying vec2 vUv;

		void main() {
			gl_FragColor = texture(texture1, vUv);
		}`},s=new m,n=new w(75,window.innerWidth/window.innerHeight,.1,1e3),e=new c;e.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(e.domElement);window.addEventListener("resize",z,!1);const y=new l(1,1,1);new h({color:65280});var u=new v;s.background=u.load("Textures/portland.jpg");const M=new f({uniforms:{texture1:{type:"t",value:u.load("Textures/battle ui.png")}},vertexShader:C.vertexShader,fragmentShader:document.getElementById("fragmentShader").textContent}),i=new p(y,M);s.add(i);n.position.z=2;var d=.01;const o=document.getElementById("swapButton");o.addEventListener("click",()=>{b()});const W=g(window.innerWidth/2,window.innerHeight/2);r.uniforms.iResolution=W;r.uniforms.useCustomPalette.value=-1;const a=new x(e),B=new S(s,n),t=new P(r);a.addPass(B);a.addPass(t);a.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(E);function z(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function E(){i.rotation.x+=d,i.rotation.y+=d,a.render()}function b(){t.material.uniforms.useCustomPalette.value<0?(t.material.uniforms.useCustomPalette.value=1,o.textContent="Switch to Standard"):(t.material.uniforms.useCustomPalette.value=-1,o.textContent="Switch to Set Palette")}
