import"./VolumeNodeMaterial-CSXjMlTf.js";const o={name:"QuantizedDither",uniforms:{tDiffuse:{value:null},iResolution:{value:null},useCustomPalette:{value:-1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
        uniform vec2 iResolution;
        uniform float useCustomPalette;

        varying vec2 vUv;

        float _Spread = 0.1;

        float _RedCount = 4.0;
        float _GreenCount = 4.0;
        float _BlueCount = 4.0;

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

        const vec4 allColors[8] = vec4[](
                vec4(0.0, 0.0, 0.0, 1.0),
                vec4(0.5, 0.5, 0.5, 1.0),
                vec4(0.68, 0.77, 0.875, 1.0),
                vec4(0.2, 0.19, 0.18, 1.0),
                vec4(0.07, 0.18, 0.07, 1.0),
                vec4(0.34, 0.46, 0.34, 1.0),
                vec4(0.25, 0.19, 0.13, 1.0),
                vec4(0.37, 0.33, 0.29, 1.0)
        );


        vec4 findNearestColor(vec4 col)
        {
            float minDistance = 10.0;
            vec4 nearestCol = vec4(1.0, 1.0, 1.0, 1.0);

            for (int i = 0; i < 8; i++)
            {
                float distance = (
                    abs(col.r - allColors[i].r) +
                    abs(col.g - allColors[i].g) +
                    abs(col.b - allColors[i].b)
                );

                if (distance < minDistance)
                {
                    minDistance = distance;
                    nearestCol = allColors[i];
                }
            }

            return nearestCol;
        }

        float getBayer4x4(vec2 uv)
        {
            int x = int(mod(uv.x * iResolution.x, 4.0));
            int y = int(mod(uv.y * iResolution.y, 4.0));

            return bayer4[y][x];
        }

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

            texCol = texCol + mix(-_Spread, _Spread, getBayer4x4(vUv));

            //texCol = findNearestColor(texCol);

            if (useCustomPalette < 0.0)
            {
                texCol.r = floor((_RedCount - 1.0) * texCol.r + 0.5) / (_RedCount - 1.0);
                texCol.g = floor((_GreenCount - 1.0) * texCol.g + 0.5) / (_GreenCount - 1.0);
                texCol.b = floor((_BlueCount - 1.0) * texCol.b + 0.5) / (_BlueCount - 1.0);
            }
            else
            {
                texCol = findNearestColor(texCol);
            }

            gl_FragColor = texCol;
        }`};export{o as Q};
