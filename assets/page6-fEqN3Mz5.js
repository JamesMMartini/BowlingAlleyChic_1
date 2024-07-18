import{S as m,P as u,W as c,v,E as w,R as x,a as f,B as h,M as g,T as p,b as y,c as R}from"./VolumeNodeMaterial-CSXjMlTf.js";/* empty css                   */const i={name:"RotatedCluster",uniforms:{tDiffuse:{value:null},iResolution:{value:null},RotateMatrix:{value:!0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
        #define PI 3.14159265359

		uniform sampler2D tDiffuse;
        uniform vec2 iResolution;
        uniform bool RotateMatrix;

        varying vec2 vUv;

        mat2 bayerMatrix = mat2 (
            0, 0.75,
            0.5, 0.25
        );

        mat4 bayer4 = mat4(
            0.5, 0.375, 0.4375, 0.5625,
            0.3125, 0, 0.0625, 0.75,
            0.25, 0.1875, 0.125, 0.8125,
            0.6875, 0.625, 0.9375, 0.875
        );

        mat3 bayer3 = mat3(
            0.888, 0.666, 0.777,
            0.555, 0, 0.111,
            0.444, 0.333, 0.222
        );

        mat3 low3 = mat3(
            0.5, 0.389, 0.444,
            0.333, 0.056, 0.111,
            0.278, 0.222, 0.167
        );

        mat3 high3 = mat3(
            0.556, 0.667, 0.611,
            0.722, 1.0, 0.944,
            0.778, 0.833, 0.889
        );

        mat3 spiralLow = mat3(
            0.389, 0.444, 0.5,
            0.333, 0.056, 0.111,
            0.278, 0.222, 0.167
        );

        mat3 spiralHigh = mat3(
            0.667, 0.611, 0.556,
            0.722, 1.0, 0.944,
            0.778, 0.833, 0.889
        );

        mat4 clust4Low = mat4(
            14.0, 12.0, 13.0, 16.0,
            5.0, 4.0, 3.0, 10.0,
            6.0, 1.0, 2.0, 11.0,
            9.0, 7.0, 8.0, 15.0
        );

        mat4 clust4High = mat4(
            19.0, 21.0, 20.0, 17.0,
            28.0, 29.0, 30.0, 23.0,
            27.0, 32.0, 31.0, 22.0,
            24.0, 26.0, 25.0, 18.0
        );

        mat2 rotate2d(float _angle){
            return mat2(cos(_angle),-sin(_angle),
                        sin(_angle),cos(_angle));
        }

        float evaluateTexel(vec4 col, vec2 uv)
        {
            vec2 st = uv.xy * iResolution.xy;

            //uv = rotate2d(PI/4.0) * uv;

            if (RotateMatrix == true)
                st = rotate2d(PI/4.0) * st;

            //int x = int(mod(uv.x * iResolution.x, 8.0));
            //int y = int(mod(uv.y * iResolution.y, 8.0));

            int x = int(mod(st.x, 8.0));
            int y = int(mod(st.y, 8.0));

            float comp = 0.0;

            if (x < 4 && y < 4)
            {
                comp = clust4Low[y][x];
            }
            else if (x < 4 && y >= 4)
            {
                comp = clust4High[y - 4][x];
            }
            else if (x >= 4 && y < 4)
            {
                comp = clust4High[y][x - 4];
            }
            else
            {
                comp = clust4Low[y - 4][x - 4];
            }

            comp = comp / 32.0;

            //comp = 0.5;

            //float comp = alt4[y][x];

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
        }`},d=new m,a=new u(75,window.innerWidth/window.innerHeight,.1,1e3),e=new c;e.setSize(window.innerWidth,window.innerHeight);e.setAnimationLoop(H);document.body.appendChild(e.domElement);window.addEventListener("resize",b,!1);const M=v(window.innerWidth/1,window.innerHeight/1);i.uniforms.iResolution=M;i.uniforms.RotateMatrix.value=!0;const n=new w(e),S=new x(d,a),t=new f(i);n.addPass(S);n.addPass(t);n.setSize(window.innerWidth,window.innerHeight);const P=new h(1,1,1);new g({color:65280});var l=new p;d.background=l.load("Textures/Portland/t_mobile.jpg");const C=new y({uniforms:{texture1:{type:"t",value:l.load("Textures/battle ui.png")}},vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),r=new R(P,C);a.position.z=2;var s=.01;const o=document.getElementById("swapButton");o.addEventListener("click",()=>{L()});function b(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function H(){r.rotation.x+=s,r.rotation.y+=s,n.render()}function L(){t.material.uniforms.RotateMatrix.value==!0?(t.material.uniforms.RotateMatrix.value=!1,o.textContent="Switch to Rotated"):(t.material.uniforms.RotateMatrix.value=!0,o.textContent="Switch to Non-Rotated")}
