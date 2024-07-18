import{S as c,P as h,W as v,v as f,E as x,R as g,a as S,B as p,M as w,T as P,b as l,c as C}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */import{Q as o}from"./QuantizedDither-B5B4gs4j.js";const u={name:"BasicShader",uniforms:{texture1:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;

			gl_Position =   projectionMatrix * modelViewMatrix * vec4(position,1.0);
		}`,fragmentShader:`

		uniform sampler2D texture1;

		varying vec2 vUv;

		void main() {
			gl_FragColor = texture(texture1, vUv);
		}`},s=new c,n=new h(75,window.innerWidth/window.innerHeight,.1,1e3),e=new v;e.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(b);document.body.appendChild(e.domElement);window.addEventListener("resize",E,!1);const y=f(window.innerWidth/2,window.innerHeight/2);o.uniforms.iResolution=y;o.uniforms.useCustomPalette.value=-1;const a=new x(e),B=new g(s,n),t=new S(o);a.addPass(B);a.addPass(t);a.setSize(window.innerWidth,window.innerHeight);const M=new p(1,1,1);new w({color:65280});var d=new P;s.background=d.load("Textures/portland.jpg");new w;const W=new l({uniforms:{texture1:{type:"t",value:d.load("Textures/battle ui.png")}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader});new l({uniforms:{texture1:{type:"t",value:d.load("Textures/battle ui.png")}},vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent});const r=new C(M,W);s.add(r);n.position.z=2;var m=.01;const i=document.getElementById("swapButton");i.addEventListener("click",()=>{z()});function E(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function b(){r.rotation.x+=m,r.rotation.y+=m,a.render()}function z(){t.material.uniforms.useCustomPalette.value<0?(t.material.uniforms.useCustomPalette.value=1,i.textContent="Switch to Standard"):(t.material.uniforms.useCustomPalette.value=-1,i.textContent="Switch to Set Palette")}
