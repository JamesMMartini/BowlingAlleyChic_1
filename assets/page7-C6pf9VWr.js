import{S as w,P as c,W as m,B as l,M as h,T as v,b as f,c as S,v as p,E as g,R as x,a as P}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */import{Q as o}from"./QuantizedDither-B5B4gs4j.js";const d={name:"BasicShader",uniforms:{texture1:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;

			gl_Position =   projectionMatrix * modelViewMatrix * vec4(position,1.0);
		}`,fragmentShader:`

		uniform sampler2D texture1;

		varying vec2 vUv;

		void main() {
			gl_FragColor = texture(texture1, vUv);
		}`},s=new w,n=new c(75,window.innerWidth/window.innerHeight,.1,1e3),e=new m;e.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(e.domElement);window.addEventListener("resize",B,!1);const C=new l(1,1,1);new h({color:65280});var M=new v;s.background=M.load("Textures/portland.jpg");const W=new f({vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),i=new S(C,W);s.add(i);n.position.z=2;var u=.01;const r=document.getElementById("swapButton");r.addEventListener("click",()=>{H()});const y=p(window.innerWidth/2,window.innerHeight/2);o.uniforms.iResolution=y;o.uniforms.useCustomPalette.value=-1;const a=new g(e),z=new x(s,n),t=new P(o);a.addPass(z);a.addPass(t);a.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(E);function B(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function E(){i.rotation.x+=u,i.rotation.y+=u,a.render()}function H(){t.material.uniforms.useCustomPalette.value<0?(t.material.uniforms.useCustomPalette.value=1,r.textContent="Switch to Standard"):(t.material.uniforms.useCustomPalette.value=-1,r.textContent="Switch to Set Palette")}
