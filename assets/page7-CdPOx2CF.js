import{S as m,P as c,W as l,B as h,M as v,T as f,b as p,c as S,v as g,E as x,R as P,a as C}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */import{Q as o}from"./QuantizedDither-B5B4gs4j.js";const d={name:"BasicShader",uniforms:{texture1:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;

			gl_Position =   projectionMatrix * modelViewMatrix * vec4(position,1.0);
		}`,fragmentShader:`

		uniform sampler2D texture1;

		varying vec2 vUv;

		void main() {
			gl_FragColor = texture(texture1, vUv);
		}`},s=new m,n=new c(75,window.innerWidth/window.innerHeight,.1,1e3),e=new l;e.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(b);document.body.appendChild(e.domElement);window.addEventListener("resize",B,!1);const M=new h(1,1,1);new v({color:65280});var w=new f;s.background=w.load("Textures/portland.jpg");const W=new p({uniforms:{texture1:{type:"t",value:w.load("Textures/battle ui.png")}},vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),i=new S(M,W);s.add(i);n.position.z=2;var u=.01;const r=document.getElementById("swapButton");r.addEventListener("click",()=>{E()});const y=g(window.innerWidth/2,window.innerHeight/2);o.uniforms.iResolution=y;o.uniforms.useCustomPalette.value=-1;const a=new x(e),z=new P(s,n),t=new C(o);a.addPass(z);a.addPass(t);a.setSize(window.innerWidth,window.innerHeight);function B(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function b(){i.rotation.x+=u,i.rotation.y+=u,a.render()}function E(){t.material.uniforms.useCustomPalette.value<0?(t.material.uniforms.useCustomPalette.value=1,r.textContent="Switch to Standard"):(t.material.uniforms.useCustomPalette.value=-1,r.textContent="Switch to Set Palette")}
