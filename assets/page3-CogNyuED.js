import{S as d,P as l,W as c,v as m,E as u,R as v,a as w,B as f,M as h,T as x,b as g,c as p}from"./VolumeNodeMaterial-CSXjMlTf.js";const o={name:"WhiteNoiseDither",uniforms:{tDiffuse:{value:null},iResolution:{value:null}},vertexShader:`

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

        float rand(vec3 value){
            //make value smaller to avoid artefacts
            vec3 smallValue = sin(value);

            //get scalar value from 3d vector
            float random = dot(smallValue, vec3(12.9898, 78.233, 37.719));

            //make value more random by making it bigger and then taking teh factional part
            random = fract(sin(random) * 143758.5453);

            return random;
        }

        float evaluateTexel(vec4 col, vec2 uv)
        {
            int x = int(mod(uv.x * iResolution.x, 4.0));
            int y = int(mod(uv.y * iResolution.y, 4.0));

            //float comp = bayer4[y][x];

            float comp = rand(vec3(uv, 0.75));

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
        }`},r=new d,t=new l(75,window.innerWidth/window.innerHeight,.1,1e3),e=new c;e.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(M);document.body.appendChild(e.domElement);window.addEventListener("resize",W,!1);const y=m(window.innerWidth/2,window.innerHeight/2);o.uniforms.iResolution=y;const n=new u(e),S=new v(r,t),b=new w(o);n.addPass(S);n.addPass(b);n.setSize(window.innerWidth,window.innerHeight);const P=new f(1,1,1);new h({color:65280});var s=new x;r.background=s.load("Textures/Portland/pearl_1_edit.jpg");const R=new g({uniforms:{texture1:{type:"t",value:s.load("Textures/battle ui.png")}},vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),a=new p(P,R);t.position.z=2;var i=.01;function W(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function M(){a.rotation.x+=i,a.rotation.y+=i,n.render()}
