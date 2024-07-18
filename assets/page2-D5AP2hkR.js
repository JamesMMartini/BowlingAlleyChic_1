import{S as s,P as d,W as c,v as w,E as m,R as h,a as l,B as u,M as v,T as f,b as g,c as p}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */import{Q as x}from"./QuantizedDither-B5B4gs4j.js";const S={name:"BlackWhiteShader",uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

        varying vec2 vUv;

        void main() {
            vec4 texCol = texture(tDiffuse, vUv);

            if (texCol.g < 0.5)
                discard;

            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }`},o=new s,n=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=new c;e.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(B);document.body.appendChild(e.domElement);window.addEventListener("resize",z,!1);const P=w(window.innerWidth/2,window.innerHeight/2);x.uniforms.iResolution=P;const t=new m(e),W=new h(o,n),y=new l(S);t.addPass(W);t.addPass(y);t.setSize(window.innerWidth,window.innerHeight);const M=new u(1,1,1);new v({color:65280});var a=new f;o.background=a.load("Textures/Portland/pearl_1_edit.jpg");const C=new g({uniforms:{texture1:{type:"t",value:a.load("Textures/battle ui.png")}},vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),i=new p(M,C);n.position.z=2;var r=.01;function z(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function B(){i.rotation.x+=r,i.rotation.y+=r,t.render()}
