import{S as d,P as c,W as l,v as u,E as m,R as v,a as w,B as f,M as x,T as h,b as g,c as p}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css              */const r={name:"DispersedDither",uniforms:{tDiffuse:{value:null},iResolution:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
        uniform vec2 iResolution;

        varying vec2 vUv;

        mat2 bayerMatrix = mat2 (
            0, 0.75,
            0.5, 0.25
        );

        mat4 bayer4 = mat4(
            0.0, 0.75, 0.1875, 0.9375,
            0.5, 0.25, 0.6875, 0.4375,
            0.125, 0.875, 0.0625, 0.8125,
            0.625, 0.375, 0.5625, 0.3125
        );

        float evaluateTexel(vec4 col, vec2 uv)
        {
            int x = int(mod(uv.x * iResolution.x, 4.0));
            int y = int(mod(uv.y * iResolution.y, 4.0));

            float comp = bayer4[y][x];

            if (col.g < comp)
                return 1.0;
            else
                return -1.0;
        }

        void main() {
            vec4 texCol = texture(tDiffuse, vUv);

            float assessment = evaluateTexel(texCol, vUv);

            //if (iResolution.x > 100000.0)
                //discard;

            if (assessment > 0.0)
                discard;

            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }`},a=new d,n=new c(75,window.innerWidth/window.innerHeight,.1,1e3),e=new l;e.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(W);document.body.appendChild(e.domElement);window.addEventListener("resize",M,!1);const y=u(window.innerWidth/2,window.innerHeight/2);r.uniforms.iResolution=y;const t=new m(e),S=new v(a,n),P=new w(r);t.addPass(S);t.addPass(P);t.setSize(window.innerWidth,window.innerHeight);const R=new f(1,1,1);new x({color:65280});var s=new h;a.background=s.load("Textures/Portland/pdx_bridge_2.png");const b=new g({uniforms:{texture1:{type:"t",value:s.load("Textures/battle ui.png")}},vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),i=new p(R,b);n.position.z=2;var o=.01;function M(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function W(){i.rotation.x+=o,i.rotation.y+=o,t.render()}
