(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [2],
  {
    86: function (e, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return r;
      });
      var n = s(71);
      class r extends n.K {
        constructor(e) {
          super(e),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new c(e);
            }),
            this.register(function (e) {
              return new h(e);
            }),
            this.register(function (e) {
              return new p(e);
            }),
            this.register(function (e) {
              return new u(e);
            }),
            this.register(function (e) {
              return new a(e);
            }),
            this.register(function (e) {
              return new d(e);
            });
        }
        load(e, t, s, r) {
          const o = this;
          let i;
          (i =
            '' !== this.resourcePath
              ? this.resourcePath
              : '' !== this.path
              ? this.path
              : n.L.extractUrlBase(e)),
            this.manager.itemStart(e);
          const a = function (t) {
              r ? r(t) : console.error(t), o.manager.itemError(e), o.manager.itemEnd(e);
            },
            l = new n.r(this.manager);
          l.setPath(this.path),
            l.setResponseType('arraybuffer'),
            l.setRequestHeader(this.requestHeader),
            l.setWithCredentials(this.withCredentials),
            l.load(
              e,
              function (s) {
                try {
                  o.parse(
                    s,
                    i,
                    function (s) {
                      t(s), o.manager.itemEnd(e);
                    },
                    a
                  );
                } catch (n) {
                  a(n);
                }
              },
              s,
              a
            );
        }
        setDRACOLoader(e) {
          return (this.dracoLoader = e), this;
        }
        setDDSLoader() {
          throw new Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
          );
        }
        setKTX2Loader(e) {
          return (this.ktx2Loader = e), this;
        }
        setMeshoptDecoder(e) {
          return (this.meshoptDecoder = e), this;
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        parse(e, t, s, r) {
          let o;
          const a = {},
            c = {};
          if ('string' === typeof e) o = e;
          else {
            if (n.L.decodeText(new Uint8Array(e, 0, 4)) === m) {
              try {
                a[i.KHR_BINARY_GLTF] = new T(e);
              } catch (p) {
                return void (r && r(p));
              }
              o = a[i.KHR_BINARY_GLTF].content;
            } else o = n.L.decodeText(new Uint8Array(e));
          }
          const u = JSON.parse(o);
          if (void 0 === u.asset || u.asset.version[0] < 2)
            return void (
              r &&
              r(
                new Error(
                  'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.'
                )
              )
            );
          const h = new W(u, {
            path: t || this.resourcePath || '',
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          h.fileLoader.setRequestHeader(this.requestHeader);
          for (let n = 0; n < this.pluginCallbacks.length; n++) {
            const e = this.pluginCallbacks[n](h);
            (c[e.name] = e), (a[e.name] = !0);
          }
          if (u.extensionsUsed)
            for (let n = 0; n < u.extensionsUsed.length; ++n) {
              const e = u.extensionsUsed[n],
                t = u.extensionsRequired || [];
              switch (e) {
                case i.KHR_MATERIALS_UNLIT:
                  a[e] = new l();
                  break;
                case i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  a[e] = new b();
                  break;
                case i.KHR_DRACO_MESH_COMPRESSION:
                  a[e] = new x(u, this.dracoLoader);
                  break;
                case i.KHR_TEXTURE_TRANSFORM:
                  a[e] = new v();
                  break;
                case i.KHR_MESH_QUANTIZATION:
                  a[e] = new y();
                  break;
                default:
                  t.indexOf(e) >= 0 &&
                    void 0 === c[e] &&
                    console.warn('THREE.GLTFLoader: Unknown extension "' + e + '".');
              }
            }
          h.setExtensions(a), h.setPlugins(c), h.parse(s, r);
        }
      }
      function o() {
        let e = {};
        return {
          get: function (t) {
            return e[t];
          },
          add: function (t, s) {
            e[t] = s;
          },
          remove: function (t) {
            delete e[t];
          },
          removeAll: function () {
            e = {};
          },
        };
      }
      const i = {
        KHR_BINARY_GLTF: 'KHR_binary_glTF',
        KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
        KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
        KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
        KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
        KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
        KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
        KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
        KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
        EXT_TEXTURE_WEBP: 'EXT_texture_webp',
        EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression',
      };
      class a {
        constructor(e) {
          (this.parser = e),
            (this.name = i.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          const e = this.parser,
            t = this.parser.json.nodes || [];
          for (let s = 0, n = t.length; s < n; s++) {
            const n = t[s];
            n.extensions &&
              n.extensions[this.name] &&
              void 0 !== n.extensions[this.name].light &&
              e._addNodeRef(this.cache, n.extensions[this.name].light);
          }
        }
        _loadLight(e) {
          const t = this.parser,
            s = 'light:' + e;
          let r = t.cache.get(s);
          if (r) return r;
          const o = t.json,
            i = (((o.extensions && o.extensions[this.name]) || {}).lights || [])[e];
          let a;
          const l = new n.l(16777215);
          void 0 !== i.color && l.fromArray(i.color);
          const c = void 0 !== i.range ? i.range : 0;
          switch (i.type) {
            case 'directional':
              (a = new n.o(l)), a.target.position.set(0, 0, -1), a.add(a.target);
              break;
            case 'point':
              (a = new n.hb(l)), (a.distance = c);
              break;
            case 'spot':
              (a = new n.zb(l)),
                (a.distance = c),
                (i.spot = i.spot || {}),
                (i.spot.innerConeAngle =
                  void 0 !== i.spot.innerConeAngle ? i.spot.innerConeAngle : 0),
                (i.spot.outerConeAngle =
                  void 0 !== i.spot.outerConeAngle ? i.spot.outerConeAngle : Math.PI / 4),
                (a.angle = i.spot.outerConeAngle),
                (a.penumbra = 1 - i.spot.innerConeAngle / i.spot.outerConeAngle),
                a.target.position.set(0, 0, -1),
                a.add(a.target);
              break;
            default:
              throw new Error('THREE.GLTFLoader: Unexpected light type: ' + i.type);
          }
          return (
            a.position.set(0, 0, 0),
            (a.decay = 2),
            void 0 !== i.intensity && (a.intensity = i.intensity),
            (a.name = t.createUniqueName(i.name || 'light_' + e)),
            (r = Promise.resolve(a)),
            t.cache.add(s, r),
            r
          );
        }
        createNodeAttachment(e) {
          const t = this,
            s = this.parser,
            n = s.json.nodes[e],
            r = ((n.extensions && n.extensions[this.name]) || {}).light;
          return void 0 === r
            ? null
            : this._loadLight(r).then(function (e) {
                return s._getNodeRef(t.cache, r, e);
              });
        }
      }
      class l {
        constructor() {
          this.name = i.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return n.S;
        }
        extendParams(e, t, s) {
          const r = [];
          (e.color = new n.l(1, 1, 1)), (e.opacity = 1);
          const o = t.pbrMetallicRoughness;
          if (o) {
            if (Array.isArray(o.baseColorFactor)) {
              const t = o.baseColorFactor;
              e.color.fromArray(t), (e.opacity = t[3]);
            }
            void 0 !== o.baseColorTexture &&
              r.push(s.assignTexture(e, 'map', o.baseColorTexture));
          }
          return Promise.all(r);
        }
      }
      class c {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.V : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            r = s.json.materials[e];
          if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
          const o = [],
            i = r.extensions[this.name];
          if (
            (void 0 !== i.clearcoatFactor && (t.clearcoat = i.clearcoatFactor),
            void 0 !== i.clearcoatTexture &&
              o.push(s.assignTexture(t, 'clearcoatMap', i.clearcoatTexture)),
            void 0 !== i.clearcoatRoughnessFactor &&
              (t.clearcoatRoughness = i.clearcoatRoughnessFactor),
            void 0 !== i.clearcoatRoughnessTexture &&
              o.push(
                s.assignTexture(t, 'clearcoatRoughnessMap', i.clearcoatRoughnessTexture)
              ),
            void 0 !== i.clearcoatNormalTexture &&
              (o.push(s.assignTexture(t, 'clearcoatNormalMap', i.clearcoatNormalTexture)),
              void 0 !== i.clearcoatNormalTexture.scale))
          ) {
            const e = i.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new n.Jb(e, -e);
          }
          return Promise.all(o);
        }
      }
      class u {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? n.V : null;
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            n = s.json.materials[e];
          if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
          const r = [],
            o = n.extensions[this.name];
          return (
            void 0 !== o.transmissionFactor && (t.transmission = o.transmissionFactor),
            void 0 !== o.transmissionTexture &&
              r.push(s.assignTexture(t, 'transmissionMap', o.transmissionTexture)),
            Promise.all(r)
          );
        }
      }
      class h {
        constructor(e) {
          (this.parser = e), (this.name = i.KHR_TEXTURE_BASISU);
        }
        loadTexture(e) {
          const t = this.parser,
            s = t.json,
            n = s.textures[e];
          if (!n.extensions || !n.extensions[this.name]) return null;
          const r = n.extensions[this.name],
            o = s.images[r.source],
            i = t.options.ktx2Loader;
          if (!i) {
            if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
              throw new Error(
                'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures'
              );
            return null;
          }
          return t.loadTextureImage(e, o, i);
        }
      }
      class p {
        constructor(e) {
          (this.parser = e), (this.name = i.EXT_TEXTURE_WEBP), (this.isSupported = null);
        }
        loadTexture(e) {
          const t = this.name,
            s = this.parser,
            n = s.json,
            r = n.textures[e];
          if (!r.extensions || !r.extensions[t]) return null;
          const o = r.extensions[t],
            i = n.images[o.source];
          let a = s.textureLoader;
          if (i.uri) {
            const e = s.options.manager.getHandler(i.uri);
            null !== e && (a = e);
          }
          return this.detectSupport().then(function (r) {
            if (r) return s.loadTextureImage(e, i, a);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
              throw new Error(
                'THREE.GLTFLoader: WebP required by asset but unsupported.'
              );
            return s.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                const t = new Image();
                (t.src =
                  'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'),
                  (t.onload = t.onerror = function () {
                    e(1 === t.height);
                  });
              })),
            this.isSupported
          );
        }
      }
      class d {
        constructor(e) {
          (this.name = i.EXT_MESHOPT_COMPRESSION), (this.parser = e);
        }
        loadBufferView(e) {
          const t = this.parser.json,
            s = t.bufferViews[e];
          if (s.extensions && s.extensions[this.name]) {
            const e = s.extensions[this.name],
              n = this.parser.getDependency('buffer', e.buffer),
              r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
              if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
                throw new Error(
                  'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files'
                );
              return null;
            }
            return Promise.all([n, r.ready]).then(function (t) {
              const s = e.byteOffset || 0,
                n = e.byteLength || 0,
                o = e.count,
                i = e.byteStride,
                a = new ArrayBuffer(o * i),
                l = new Uint8Array(t[0], s, n);
              return r.decodeGltfBuffer(new Uint8Array(a), o, i, l, e.mode, e.filter), a;
            });
          }
          return null;
        }
      }
      const m = 'glTF',
        f = 1313821514,
        g = 5130562;
      class T {
        constructor(e) {
          (this.name = i.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
          const t = new DataView(e, 0, 12);
          if (
            ((this.header = {
              magic: n.L.decodeText(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0),
            }),
            this.header.magic !== m)
          )
            throw new Error('THREE.GLTFLoader: Unsupported glTF-Binary header.');
          if (this.header.version < 2)
            throw new Error('THREE.GLTFLoader: Legacy binary file detected.');
          const s = this.header.length - 12,
            r = new DataView(e, 12);
          let o = 0;
          for (; o < s; ) {
            const t = r.getUint32(o, !0);
            o += 4;
            const s = r.getUint32(o, !0);
            if (((o += 4), s === f)) {
              const s = new Uint8Array(e, 12 + o, t);
              this.content = n.L.decodeText(s);
            } else if (s === g) {
              const s = 12 + o;
              this.body = e.slice(s, s + t);
            }
            o += t;
          }
          if (null === this.content)
            throw new Error('THREE.GLTFLoader: JSON content not found.');
        }
      }
      class x {
        constructor(e, t) {
          if (!t) throw new Error('THREE.GLTFLoader: No DRACOLoader instance provided.');
          (this.name = i.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
          const s = this.json,
            n = this.dracoLoader,
            r = e.extensions[this.name].bufferView,
            o = e.extensions[this.name].attributes,
            i = {},
            a = {},
            l = {};
          for (const c in o) {
            const e = H[c] || c.toLowerCase();
            i[e] = o[c];
          }
          for (const c in e.attributes) {
            const t = H[c] || c.toLowerCase();
            if (void 0 !== o[c]) {
              const n = s.accessors[e.attributes[c]],
                r = P[n.componentType];
              (l[t] = r), (a[t] = !0 === n.normalized);
            }
          }
          return t.getDependency('bufferView', r).then(function (e) {
            return new Promise(function (t) {
              n.decodeDracoFile(
                e,
                function (e) {
                  for (const t in e.attributes) {
                    const s = e.attributes[t],
                      n = a[t];
                    void 0 !== n && (s.normalized = n);
                  }
                  t(e);
                },
                i,
                l
              );
            });
          });
        }
      }
      class v {
        constructor() {
          this.name = i.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
          return (
            void 0 !== t.texCoord &&
              console.warn(
                'THREE.GLTFLoader: Custom UV sets in "' +
                  this.name +
                  '" extension not yet supported.'
              ),
            (void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale) ||
              ((e = e.clone()),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              (e.needsUpdate = !0)),
            e
          );
        }
      }
      class R extends n.W {
        constructor(e) {
          super(), (this.isGLTFSpecularGlossinessMaterial = !0);
          const t = [
              '#ifdef USE_SPECULARMAP',
              '\tuniform sampler2D specularMap;',
              '#endif',
            ].join('\n'),
            s = [
              '#ifdef USE_GLOSSINESSMAP',
              '\tuniform sampler2D glossinessMap;',
              '#endif',
            ].join('\n'),
            r = [
              'vec3 specularFactor = specular;',
              '#ifdef USE_SPECULARMAP',
              '\tvec4 texelSpecular = texture2D( specularMap, vUv );',
              '\ttexelSpecular = sRGBToLinear( texelSpecular );',
              '\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
              '\tspecularFactor *= texelSpecular.rgb;',
              '#endif',
            ].join('\n'),
            o = [
              'float glossinessFactor = glossiness;',
              '#ifdef USE_GLOSSINESSMAP',
              '\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );',
              '\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
              '\tglossinessFactor *= texelGlossiness.a;',
              '#endif',
            ].join('\n'),
            i = [
              'PhysicalMaterial material;',
              'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
              'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
              'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
              'material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
              'material.specularRoughness += geometryRoughness;',
              'material.specularRoughness = min( material.specularRoughness, 1.0 );',
              'material.specularColor = specularFactor;',
            ].join('\n'),
            a = {
              specular: { value: new n.l().setHex(16777215) },
              glossiness: { value: 1 },
              specularMap: { value: null },
              glossinessMap: { value: null },
            };
          (this._extraUniforms = a),
            (this.onBeforeCompile = function (e) {
              for (const t in a) e.uniforms[t] = a[t];
              e.fragmentShader = e.fragmentShader
                .replace('uniform float roughness;', 'uniform vec3 specular;')
                .replace('uniform float metalness;', 'uniform float glossiness;')
                .replace('#include <roughnessmap_pars_fragment>', t)
                .replace('#include <metalnessmap_pars_fragment>', s)
                .replace('#include <roughnessmap_fragment>', r)
                .replace('#include <metalnessmap_fragment>', o)
                .replace('#include <lights_physical_fragment>', i);
            }),
            Object.defineProperties(this, {
              specular: {
                get: function () {
                  return a.specular.value;
                },
                set: function (e) {
                  a.specular.value = e;
                },
              },
              specularMap: {
                get: function () {
                  return a.specularMap.value;
                },
                set: function (e) {
                  (a.specularMap.value = e),
                    e
                      ? (this.defines.USE_SPECULARMAP = '')
                      : delete this.defines.USE_SPECULARMAP;
                },
              },
              glossiness: {
                get: function () {
                  return a.glossiness.value;
                },
                set: function (e) {
                  a.glossiness.value = e;
                },
              },
              glossinessMap: {
                get: function () {
                  return a.glossinessMap.value;
                },
                set: function (e) {
                  (a.glossinessMap.value = e),
                    e
                      ? ((this.defines.USE_GLOSSINESSMAP = ''),
                        (this.defines.USE_UV = ''))
                      : (delete this.defines.USE_GLOSSINESSMAP,
                        delete this.defines.USE_UV);
                },
              },
            }),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this.setValues(e);
        }
        copy(e) {
          return (
            super.copy(e),
            (this.specularMap = e.specularMap),
            this.specular.copy(e.specular),
            (this.glossinessMap = e.glossinessMap),
            (this.glossiness = e.glossiness),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this
          );
        }
      }
      class b {
        constructor() {
          (this.name = i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS),
            (this.specularGlossinessParams = [
              'color',
              'map',
              'lightMap',
              'lightMapIntensity',
              'aoMap',
              'aoMapIntensity',
              'emissive',
              'emissiveIntensity',
              'emissiveMap',
              'bumpMap',
              'bumpScale',
              'normalMap',
              'normalMapType',
              'displacementMap',
              'displacementScale',
              'displacementBias',
              'specularMap',
              'specular',
              'glossinessMap',
              'glossiness',
              'alphaMap',
              'envMap',
              'envMapIntensity',
              'refractionRatio',
            ]);
        }
        getMaterialType() {
          return R;
        }
        extendParams(e, t, s) {
          const r = t.extensions[this.name];
          (e.color = new n.l(1, 1, 1)), (e.opacity = 1);
          const o = [];
          if (Array.isArray(r.diffuseFactor)) {
            const t = r.diffuseFactor;
            e.color.fromArray(t), (e.opacity = t[3]);
          }
          if (
            (void 0 !== r.diffuseTexture &&
              o.push(s.assignTexture(e, 'map', r.diffuseTexture)),
            (e.emissive = new n.l(0, 0, 0)),
            (e.glossiness = void 0 !== r.glossinessFactor ? r.glossinessFactor : 1),
            (e.specular = new n.l(1, 1, 1)),
            Array.isArray(r.specularFactor) && e.specular.fromArray(r.specularFactor),
            void 0 !== r.specularGlossinessTexture)
          ) {
            const t = r.specularGlossinessTexture;
            o.push(s.assignTexture(e, 'glossinessMap', t)),
              o.push(s.assignTexture(e, 'specularMap', t));
          }
          return Promise.all(o);
        }
        createMaterial(e) {
          const t = new R(e);
          return (
            (t.fog = !0),
            (t.color = e.color),
            (t.map = void 0 === e.map ? null : e.map),
            (t.lightMap = null),
            (t.lightMapIntensity = 1),
            (t.aoMap = void 0 === e.aoMap ? null : e.aoMap),
            (t.aoMapIntensity = 1),
            (t.emissive = e.emissive),
            (t.emissiveIntensity = 1),
            (t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap),
            (t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap),
            (t.bumpScale = 1),
            (t.normalMap = void 0 === e.normalMap ? null : e.normalMap),
            (t.normalMapType = n.Cb),
            e.normalScale && (t.normalScale = e.normalScale),
            (t.displacementMap = null),
            (t.displacementScale = 1),
            (t.displacementBias = 0),
            (t.specularMap = void 0 === e.specularMap ? null : e.specularMap),
            (t.specular = e.specular),
            (t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap),
            (t.glossiness = e.glossiness),
            (t.alphaMap = null),
            (t.envMap = void 0 === e.envMap ? null : e.envMap),
            (t.envMapIntensity = 1),
            (t.refractionRatio = 0.98),
            t
          );
        }
      }
      class y {
        constructor() {
          this.name = i.KHR_MESH_QUANTIZATION;
        }
      }
      class M extends n.z {
        constructor(e, t, s, n) {
          super(e, t, s, n);
        }
        copySampleValue_(e) {
          const t = this.resultBuffer,
            s = this.sampleValues,
            n = this.valueSize,
            r = e * n * 3 + n;
          for (let o = 0; o !== n; o++) t[o] = s[r + o];
          return t;
        }
      }
      (M.prototype.beforeStart_ = M.prototype.copySampleValue_),
        (M.prototype.afterEnd_ = M.prototype.copySampleValue_),
        (M.prototype.interpolate_ = function (e, t, s, n) {
          const r = this.resultBuffer,
            o = this.sampleValues,
            i = this.valueSize,
            a = 2 * i,
            l = 3 * i,
            c = n - t,
            u = (s - t) / c,
            h = u * u,
            p = h * u,
            d = e * l,
            m = d - l,
            f = -2 * p + 3 * h,
            g = p - h,
            T = 1 - f,
            x = g - h + u;
          for (let v = 0; v !== i; v++) {
            const e = o[m + v + i],
              t = o[m + v + a] * c,
              s = o[d + v + i],
              n = o[d + v] * c;
            r[v] = T * e + x * t + f * s + g * n;
          }
          return r;
        });
      const S = 0,
        A = 1,
        _ = 2,
        w = 3,
        E = 4,
        L = 5,
        I = 6,
        P = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        O = { 9728: n.Y, 9729: n.H, 9984: n.ab, 9985: n.J, 9986: n.Z, 9987: n.I },
        N = { 33071: n.j, 33648: n.X, 10497: n.rb },
        C = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
        H = {
          POSITION: 'position',
          NORMAL: 'normal',
          TANGENT: 'tangent',
          TEXCOORD_0: 'uv',
          TEXCOORD_1: 'uv2',
          COLOR_0: 'color',
          WEIGHTS_0: 'skinWeight',
          JOINTS_0: 'skinIndex',
        },
        U = {
          scale: 'scale',
          translation: 'position',
          rotation: 'quaternion',
          weights: 'morphTargetInfluences',
        },
        F = { CUBICSPLINE: void 0, LINEAR: n.B, STEP: n.A },
        k = 'OPAQUE',
        D = 'MASK',
        G = 'BLEND';
      function j(e, t) {
        return 'string' !== typeof e || '' === e
          ? ''
          : (/^https?:\/\//i.test(t) &&
              /^\//.test(e) &&
              (t = t.replace(/(^https?:\/\/[^\/]+).*/i, '$1')),
            /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e)
              ? e
              : t + e);
      }
      function K(e, t, s) {
        for (const n in s.extensions)
          void 0 === e[n] &&
            ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
            (t.userData.gltfExtensions[n] = s.extensions[n]));
      }
      function B(e, t) {
        void 0 !== t.extras &&
          ('object' === typeof t.extras
            ? Object.assign(e.userData, t.extras)
            : console.warn(
                'THREE.GLTFLoader: Ignoring primitive type .extras, ' + t.extras
              ));
      }
      function V(e, t) {
        if ((e.updateMorphTargets(), void 0 !== t.weights))
          for (let s = 0, n = t.weights.length; s < n; s++)
            e.morphTargetInfluences[s] = t.weights[s];
        if (t.extras && Array.isArray(t.extras.targetNames)) {
          const s = t.extras.targetNames;
          if (e.morphTargetInfluences.length === s.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, n = s.length; t < n; t++) e.morphTargetDictionary[s[t]] = t;
          } else
            console.warn(
              'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.'
            );
        }
      }
      function X(e) {
        const t = e.extensions && e.extensions[i.KHR_DRACO_MESH_COMPRESSION];
        let s;
        return (
          (s = t
            ? 'draco:' + t.bufferView + ':' + t.indices + ':' + q(t.attributes)
            : e.indices + ':' + q(e.attributes) + ':' + e.mode),
          s
        );
      }
      function q(e) {
        let t = '';
        const s = Object.keys(e).sort();
        for (let n = 0, r = s.length; n < r; n++) t += s[n] + ':' + e[s[n]] + ';';
        return t;
      }
      function z(e) {
        switch (e) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw new Error(
              'THREE.GLTFLoader: Unsupported normalized accessor component type.'
            );
        }
      }
      class W {
        constructor(e = {}, t = {}) {
          (this.json = e),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = t),
            (this.cache = new o()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {}),
            'undefined' !== typeof createImageBitmap &&
            !1 === /Firefox/.test(navigator.userAgent)
              ? (this.textureLoader = new n.w(this.options.manager))
              : (this.textureLoader = new n.Db(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new n.r(this.options.manager)),
            this.fileLoader.setResponseType('arraybuffer'),
            'use-credentials' === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
          this.extensions = e;
        }
        setPlugins(e) {
          this.plugins = e;
        }
        parse(e, t) {
          const s = this,
            n = this.json,
            r = this.extensions;
          this.cache.removeAll(),
            this._invokeAll(function (e) {
              return e._markDefs && e._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (e) {
                return e.beforeRoot && e.beforeRoot();
              })
            )
              .then(function () {
                return Promise.all([
                  s.getDependencies('scene'),
                  s.getDependencies('animation'),
                  s.getDependencies('camera'),
                ]);
              })
              .then(function (t) {
                const o = {
                  scene: t[0][n.scene || 0],
                  scenes: t[0],
                  animations: t[1],
                  cameras: t[2],
                  asset: n.asset,
                  parser: s,
                  userData: {},
                };
                K(r, o, n),
                  B(o, n),
                  Promise.all(
                    s._invokeAll(function (e) {
                      return e.afterRoot && e.afterRoot(o);
                    })
                  ).then(function () {
                    e(o);
                  });
              })
              .catch(t);
        }
        _markDefs() {
          const e = this.json.nodes || [],
            t = this.json.skins || [],
            s = this.json.meshes || [];
          for (let n = 0, r = t.length; n < r; n++) {
            const s = t[n].joints;
            for (let t = 0, n = s.length; t < n; t++) e[s[t]].isBone = !0;
          }
          for (let n = 0, r = e.length; n < r; n++) {
            const t = e[n];
            void 0 !== t.mesh &&
              (this._addNodeRef(this.meshCache, t.mesh),
              void 0 !== t.skin && (s[t.mesh].isSkinnedMesh = !0)),
              void 0 !== t.camera && this._addNodeRef(this.cameraCache, t.camera);
          }
        }
        _addNodeRef(e, t) {
          void 0 !== t &&
            (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, s) {
          if (e.refs[t] <= 1) return s;
          const n = s.clone();
          return (n.name += '_instance_' + e.uses[t]++), n;
        }
        _invokeOne(e) {
          const t = Object.values(this.plugins);
          t.push(this);
          for (let s = 0; s < t.length; s++) {
            const n = e(t[s]);
            if (n) return n;
          }
          return null;
        }
        _invokeAll(e) {
          const t = Object.values(this.plugins);
          t.unshift(this);
          const s = [];
          for (let n = 0; n < t.length; n++) {
            const r = e(t[n]);
            r && s.push(r);
          }
          return s;
        }
        getDependency(e, t) {
          const s = e + ':' + t;
          let n = this.cache.get(s);
          if (!n) {
            switch (e) {
              case 'scene':
                n = this.loadScene(t);
                break;
              case 'node':
                n = this.loadNode(t);
                break;
              case 'mesh':
                n = this._invokeOne(function (e) {
                  return e.loadMesh && e.loadMesh(t);
                });
                break;
              case 'accessor':
                n = this.loadAccessor(t);
                break;
              case 'bufferView':
                n = this._invokeOne(function (e) {
                  return e.loadBufferView && e.loadBufferView(t);
                });
                break;
              case 'buffer':
                n = this.loadBuffer(t);
                break;
              case 'material':
                n = this._invokeOne(function (e) {
                  return e.loadMaterial && e.loadMaterial(t);
                });
                break;
              case 'texture':
                n = this._invokeOne(function (e) {
                  return e.loadTexture && e.loadTexture(t);
                });
                break;
              case 'skin':
                n = this.loadSkin(t);
                break;
              case 'animation':
                n = this.loadAnimation(t);
                break;
              case 'camera':
                n = this.loadCamera(t);
                break;
              default:
                throw new Error('Unknown type: ' + e);
            }
            this.cache.add(s, n);
          }
          return n;
        }
        getDependencies(e) {
          let t = this.cache.get(e);
          if (!t) {
            const s = this,
              n = this.json[e + ('mesh' === e ? 'es' : 's')] || [];
            (t = Promise.all(
              n.map(function (t, n) {
                return s.getDependency(e, n);
              })
            )),
              this.cache.add(e, t);
          }
          return t;
        }
        loadBuffer(e) {
          const t = this.json.buffers[e],
            s = this.fileLoader;
          if (t.type && 'arraybuffer' !== t.type)
            throw new Error(
              'THREE.GLTFLoader: ' + t.type + ' buffer type is not supported.'
            );
          if (void 0 === t.uri && 0 === e)
            return Promise.resolve(this.extensions[i.KHR_BINARY_GLTF].body);
          const n = this.options;
          return new Promise(function (e, r) {
            s.load(j(t.uri, n.path), e, void 0, function () {
              r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
            });
          });
        }
        loadBufferView(e) {
          const t = this.json.bufferViews[e];
          return this.getDependency('buffer', t.buffer).then(function (e) {
            const s = t.byteLength || 0,
              n = t.byteOffset || 0;
            return e.slice(n, n + s);
          });
        }
        loadAccessor(e) {
          const t = this,
            s = this.json,
            r = this.json.accessors[e];
          if (void 0 === r.bufferView && void 0 === r.sparse)
            return Promise.resolve(null);
          const o = [];
          return (
            void 0 !== r.bufferView
              ? o.push(this.getDependency('bufferView', r.bufferView))
              : o.push(null),
            void 0 !== r.sparse &&
              (o.push(this.getDependency('bufferView', r.sparse.indices.bufferView)),
              o.push(this.getDependency('bufferView', r.sparse.values.bufferView))),
            Promise.all(o).then(function (e) {
              const o = e[0],
                i = C[r.type],
                a = P[r.componentType],
                l = a.BYTES_PER_ELEMENT,
                c = l * i,
                u = r.byteOffset || 0,
                h =
                  void 0 !== r.bufferView
                    ? s.bufferViews[r.bufferView].byteStride
                    : void 0,
                p = !0 === r.normalized;
              let d, m;
              if (h && h !== c) {
                const e = Math.floor(u / h),
                  s =
                    'InterleavedBuffer:' +
                    r.bufferView +
                    ':' +
                    r.componentType +
                    ':' +
                    e +
                    ':' +
                    r.count;
                let c = t.cache.get(s);
                c ||
                  ((d = new a(o, e * h, (r.count * h) / l)),
                  (c = new n.x(d, h / l)),
                  t.cache.add(s, c)),
                  (m = new n.y(c, i, (u % h) / l, p));
              } else (d = null === o ? new a(r.count * i) : new a(o, u, r.count * i)), (m = new n.g(d, i, p));
              if (void 0 !== r.sparse) {
                const t = C.SCALAR,
                  s = P[r.sparse.indices.componentType],
                  l = r.sparse.indices.byteOffset || 0,
                  c = r.sparse.values.byteOffset || 0,
                  u = new s(e[1], l, r.sparse.count * t),
                  h = new a(e[2], c, r.sparse.count * i);
                null !== o && (m = new n.g(m.array.slice(), m.itemSize, m.normalized));
                for (let e = 0, n = u.length; e < n; e++) {
                  const t = u[e];
                  if (
                    (m.setX(t, h[e * i]),
                    i >= 2 && m.setY(t, h[e * i + 1]),
                    i >= 3 && m.setZ(t, h[e * i + 2]),
                    i >= 4 && m.setW(t, h[e * i + 3]),
                    i >= 5)
                  )
                    throw new Error(
                      'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.'
                    );
                }
              }
              return m;
            })
          );
        }
        loadTexture(e) {
          const t = this.json,
            s = this.options,
            n = t.textures[e],
            r = t.images[n.source];
          let o = this.textureLoader;
          if (r.uri) {
            const e = s.manager.getHandler(r.uri);
            null !== e && (o = e);
          }
          return this.loadTextureImage(e, r, o);
        }
        loadTextureImage(e, t, s) {
          const r = this,
            o = this.json,
            i = this.options,
            a = o.textures[e],
            l = (t.uri || t.bufferView) + ':' + a.sampler;
          if (this.textureCache[l]) return this.textureCache[l];
          const c = self.URL || self.webkitURL;
          let u = t.uri || '',
            h = !1,
            p = !0;
          const d =
            u.search(/\.jpe?g($|\?)/i) > 0 || 0 === u.search(/^data\:image\/jpeg/);
          if ((('image/jpeg' === t.mimeType || d) && (p = !1), void 0 !== t.bufferView))
            u = r.getDependency('bufferView', t.bufferView).then(function (e) {
              if ('image/png' === t.mimeType) {
                const t = new DataView(e, 25, 1).getUint8(0, !1);
                p = 6 === t || 4 === t || 3 === t;
              }
              h = !0;
              const s = new Blob([e], { type: t.mimeType });
              return (u = c.createObjectURL(s)), u;
            });
          else if (void 0 === t.uri)
            throw new Error(
              'THREE.GLTFLoader: Image ' + e + ' is missing URI and bufferView'
            );
          const m = Promise.resolve(u)
            .then(function (e) {
              return new Promise(function (t, r) {
                let o = t;
                !0 === s.isImageBitmapLoader &&
                  (o = function (e) {
                    t(new n.i(e));
                  }),
                  s.load(j(e, i.path), o, void 0, r);
              });
            })
            .then(function (t) {
              !0 === h && c.revokeObjectURL(u),
                (t.flipY = !1),
                a.name && (t.name = a.name),
                p || (t.format = n.pb);
              const s = (o.samplers || {})[a.sampler] || {};
              return (
                (t.magFilter = O[s.magFilter] || n.H),
                (t.minFilter = O[s.minFilter] || n.I),
                (t.wrapS = N[s.wrapS] || n.rb),
                (t.wrapT = N[s.wrapT] || n.rb),
                r.associations.set(t, { type: 'textures', index: e }),
                t
              );
            });
          return (this.textureCache[l] = m), m;
        }
        assignTexture(e, t, s) {
          const n = this;
          return this.getDependency('texture', s.index).then(function (r) {
            if (
              (void 0 === s.texCoord ||
                0 == s.texCoord ||
                ('aoMap' === t && 1 == s.texCoord) ||
                console.warn(
                  'THREE.GLTFLoader: Custom UV set ' +
                    s.texCoord +
                    ' for texture ' +
                    t +
                    ' not yet supported.'
                ),
              n.extensions[i.KHR_TEXTURE_TRANSFORM])
            ) {
              const e =
                void 0 !== s.extensions ? s.extensions[i.KHR_TEXTURE_TRANSFORM] : void 0;
              if (e) {
                const t = n.associations.get(r);
                (r = n.extensions[i.KHR_TEXTURE_TRANSFORM].extendTexture(r, e)),
                  n.associations.set(r, t);
              }
            }
            e[t] = r;
          });
        }
        assignFinalMaterial(e) {
          const t = e.geometry;
          let s = e.material;
          const r = void 0 !== t.attributes.tangent,
            o = void 0 !== t.attributes.color,
            i = void 0 === t.attributes.normal,
            a = Object.keys(t.morphAttributes).length > 0,
            l = a && void 0 !== t.morphAttributes.normal;
          if (e.isPoints) {
            const e = 'PointsMaterial:' + s.uuid;
            let t = this.cache.get(e);
            t ||
              ((t = new n.jb()),
              n.O.prototype.copy.call(t, s),
              t.color.copy(s.color),
              (t.map = s.map),
              (t.sizeAttenuation = !1),
              this.cache.add(e, t)),
              (s = t);
          } else if (e.isLine) {
            const e = 'LineBasicMaterial:' + s.uuid;
            let t = this.cache.get(e);
            t ||
              ((t = new n.D()),
              n.O.prototype.copy.call(t, s),
              t.color.copy(s.color),
              this.cache.add(e, t)),
              (s = t);
          }
          if (r || o || i || a) {
            let e = 'ClonedMaterial:' + s.uuid + ':';
            s.isGLTFSpecularGlossinessMaterial && (e += 'specular-glossiness:'),
              r && (e += 'vertex-tangents:'),
              o && (e += 'vertex-colors:'),
              i && (e += 'flat-shading:'),
              a && (e += 'morph-targets:'),
              l && (e += 'morph-normals:');
            let t = this.cache.get(e);
            t ||
              ((t = s.clone()),
              o && (t.vertexColors = !0),
              i && (t.flatShading = !0),
              a && (t.morphTargets = !0),
              l && (t.morphNormals = !0),
              r &&
                ((t.vertexTangents = !0),
                t.normalScale && (t.normalScale.y *= -1),
                t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
              this.cache.add(e, t),
              this.associations.set(t, this.associations.get(s))),
              (s = t);
          }
          s.aoMap &&
            void 0 === t.attributes.uv2 &&
            void 0 !== t.attributes.uv &&
            t.setAttribute('uv2', t.attributes.uv),
            (e.material = s);
        }
        getMaterialType() {
          return n.W;
        }
        loadMaterial(e) {
          const t = this,
            s = this.json,
            r = this.extensions,
            o = s.materials[e];
          let a;
          const l = {},
            c = o.extensions || {},
            u = [];
          if (c[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const e = r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            (a = e.getMaterialType()), u.push(e.extendParams(l, o, t));
          } else if (c[i.KHR_MATERIALS_UNLIT]) {
            const e = r[i.KHR_MATERIALS_UNLIT];
            (a = e.getMaterialType()), u.push(e.extendParams(l, o, t));
          } else {
            const s = o.pbrMetallicRoughness || {};
            if (
              ((l.color = new n.l(1, 1, 1)),
              (l.opacity = 1),
              Array.isArray(s.baseColorFactor))
            ) {
              const e = s.baseColorFactor;
              l.color.fromArray(e), (l.opacity = e[3]);
            }
            void 0 !== s.baseColorTexture &&
              u.push(t.assignTexture(l, 'map', s.baseColorTexture)),
              (l.metalness = void 0 !== s.metallicFactor ? s.metallicFactor : 1),
              (l.roughness = void 0 !== s.roughnessFactor ? s.roughnessFactor : 1),
              void 0 !== s.metallicRoughnessTexture &&
                (u.push(t.assignTexture(l, 'metalnessMap', s.metallicRoughnessTexture)),
                u.push(t.assignTexture(l, 'roughnessMap', s.metallicRoughnessTexture))),
              (a = this._invokeOne(function (t) {
                return t.getMaterialType && t.getMaterialType(e);
              })),
              u.push(
                Promise.all(
                  this._invokeAll(function (t) {
                    return t.extendMaterialParams && t.extendMaterialParams(e, l);
                  })
                )
              );
          }
          !0 === o.doubleSided && (l.side = n.p);
          const h = o.alphaMode || k;
          return (
            h === G
              ? ((l.transparent = !0), (l.depthWrite = !1))
              : ((l.transparent = !1),
                h === D &&
                  (l.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : 0.5)),
            void 0 !== o.normalTexture &&
              a !== n.S &&
              (u.push(t.assignTexture(l, 'normalMap', o.normalTexture)),
              (l.normalScale = new n.Jb(1, -1)),
              void 0 !== o.normalTexture.scale &&
                l.normalScale.set(o.normalTexture.scale, -o.normalTexture.scale)),
            void 0 !== o.occlusionTexture &&
              a !== n.S &&
              (u.push(t.assignTexture(l, 'aoMap', o.occlusionTexture)),
              void 0 !== o.occlusionTexture.strength &&
                (l.aoMapIntensity = o.occlusionTexture.strength)),
            void 0 !== o.emissiveFactor &&
              a !== n.S &&
              (l.emissive = new n.l().fromArray(o.emissiveFactor)),
            void 0 !== o.emissiveTexture &&
              a !== n.S &&
              u.push(t.assignTexture(l, 'emissiveMap', o.emissiveTexture)),
            Promise.all(u).then(function () {
              let s;
              return (
                (s =
                  a === R
                    ? r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l)
                    : new a(l)),
                o.name && (s.name = o.name),
                s.map && (s.map.encoding = n.Pb),
                s.emissiveMap && (s.emissiveMap.encoding = n.Pb),
                B(s, o),
                t.associations.set(s, { type: 'materials', index: e }),
                o.extensions && K(r, s, o),
                s
              );
            })
          );
        }
        createUniqueName(e) {
          const t = n.kb.sanitizeNodeName(e || '');
          let s = t;
          for (let n = 1; this.nodeNamesUsed[s]; ++n) s = t + '_' + n;
          return (this.nodeNamesUsed[s] = !0), s;
        }
        loadGeometries(e) {
          const t = this,
            s = this.extensions,
            r = this.primitiveCache;
          function o(e) {
            return s[i.KHR_DRACO_MESH_COMPRESSION]
              .decodePrimitive(e, t)
              .then(function (s) {
                return Y(s, e, t);
              });
          }
          const a = [];
          for (let l = 0, c = e.length; l < c; l++) {
            const s = e[l],
              c = X(s),
              u = r[c];
            if (u) a.push(u.promise);
            else {
              let e;
              (e =
                s.extensions && s.extensions[i.KHR_DRACO_MESH_COMPRESSION]
                  ? o(s)
                  : Y(new n.h(), s, t)),
                (r[c] = { primitive: s, promise: e }),
                a.push(e);
            }
          }
          return Promise.all(a);
        }
        loadMesh(e) {
          const t = this,
            s = this.json,
            r = this.extensions,
            o = s.meshes[e],
            i = o.primitives,
            a = [];
          for (let c = 0, u = i.length; c < u; c++) {
            const e =
              void 0 === i[c].material
                ? (void 0 === (l = this.cache).DefaultMaterial &&
                    (l.DefaultMaterial = new n.W({
                      color: 16777215,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: n.t,
                    })),
                  l.DefaultMaterial)
                : this.getDependency('material', i[c].material);
            a.push(e);
          }
          var l;
          return (
            a.push(t.loadGeometries(i)),
            Promise.all(a).then(function (s) {
              const a = s.slice(0, s.length - 1),
                l = s[s.length - 1],
                c = [];
              for (let h = 0, p = l.length; h < p; h++) {
                const s = l[h],
                  u = i[h];
                let p;
                const d = a[h];
                if (u.mode === E || u.mode === L || u.mode === I || void 0 === u.mode)
                  (p = !0 === o.isSkinnedMesh ? new n.vb(s, d) : new n.R(s, d)),
                    !0 !== p.isSkinnedMesh ||
                      p.geometry.attributes.skinWeight.normalized ||
                      p.normalizeSkinWeights(),
                    u.mode === L
                      ? (p.geometry = Q(p.geometry, n.Fb))
                      : u.mode === I && (p.geometry = Q(p.geometry, n.Eb));
                else if (u.mode === A) p = new n.F(s, d);
                else if (u.mode === w) p = new n.C(s, d);
                else if (u.mode === _) p = new n.E(s, d);
                else {
                  if (u.mode !== S)
                    throw new Error(
                      'THREE.GLTFLoader: Primitive mode unsupported: ' + u.mode
                    );
                  p = new n.ib(s, d);
                }
                Object.keys(p.geometry.morphAttributes).length > 0 && V(p, o),
                  (p.name = t.createUniqueName(o.name || 'mesh_' + e)),
                  B(p, o),
                  u.extensions && K(r, p, u),
                  t.assignFinalMaterial(p),
                  c.push(p);
              }
              if (1 === c.length) return c[0];
              const u = new n.u();
              for (let e = 0, t = c.length; e < t; e++) u.add(c[e]);
              return u;
            })
          );
        }
        loadCamera(e) {
          let t;
          const s = this.json.cameras[e],
            r = s[s.type];
          if (r)
            return (
              'perspective' === s.type
                ? (t = new n.fb(
                    n.P.radToDeg(r.yfov),
                    r.aspectRatio || 1,
                    r.znear || 1,
                    r.zfar || 2e6
                  ))
                : 'orthographic' === s.type &&
                  (t = new n.db(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)),
              s.name && (t.name = this.createUniqueName(s.name)),
              B(t, s),
              Promise.resolve(t)
            );
          console.warn('THREE.GLTFLoader: Missing camera parameters.');
        }
        loadSkin(e) {
          const t = this.json.skins[e],
            s = { joints: t.joints };
          return void 0 === t.inverseBindMatrices
            ? Promise.resolve(s)
            : this.getDependency('accessor', t.inverseBindMatrices).then(function (e) {
                return (s.inverseBindMatrices = e), s;
              });
        }
        loadAnimation(e) {
          const t = this.json.animations[e],
            s = [],
            r = [],
            o = [],
            i = [],
            a = [];
          for (let n = 0, l = t.channels.length; n < l; n++) {
            const e = t.channels[n],
              l = t.samplers[e.sampler],
              c = e.target,
              u = void 0 !== c.node ? c.node : c.id,
              h = void 0 !== t.parameters ? t.parameters[l.input] : l.input,
              p = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
            s.push(this.getDependency('node', u)),
              r.push(this.getDependency('accessor', h)),
              o.push(this.getDependency('accessor', p)),
              i.push(l),
              a.push(c);
          }
          return Promise.all([
            Promise.all(s),
            Promise.all(r),
            Promise.all(o),
            Promise.all(i),
            Promise.all(a),
          ]).then(function (s) {
            const r = s[0],
              o = s[1],
              i = s[2],
              a = s[3],
              l = s[4],
              c = [];
            for (let e = 0, t = r.length; e < t; e++) {
              const t = r[e],
                s = o[e],
                u = i[e],
                h = a[e],
                p = l[e];
              if (void 0 === t) continue;
              let d;
              switch ((t.updateMatrix(), (t.matrixAutoUpdate = !0), U[p.path])) {
                case U.weights:
                  d = n.bb;
                  break;
                case U.rotation:
                  d = n.mb;
                  break;
                case U.position:
                case U.scale:
                default:
                  d = n.Lb;
              }
              const m = t.name ? t.name : t.uuid,
                f = void 0 !== h.interpolation ? F[h.interpolation] : n.B,
                g = [];
              U[p.path] === U.weights
                ? t.traverse(function (e) {
                    !0 === e.isMesh &&
                      e.morphTargetInfluences &&
                      g.push(e.name ? e.name : e.uuid);
                  })
                : g.push(m);
              let T = u.array;
              if (u.normalized) {
                const e = z(T.constructor),
                  t = new Float32Array(T.length);
                for (let s = 0, n = T.length; s < n; s++) t[s] = T[s] * e;
                T = t;
              }
              for (let e = 0, n = g.length; e < n; e++) {
                const t = new d(g[e] + '.' + U[p.path], s.array, T, f);
                'CUBICSPLINE' === h.interpolation &&
                  ((t.createInterpolant = function (e) {
                    return new M(this.times, this.values, this.getValueSize() / 3, e);
                  }),
                  (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0)),
                  c.push(t);
              }
            }
            const u = t.name ? t.name : 'animation_' + e;
            return new n.c(u, void 0, c);
          });
        }
        createNodeMesh(e) {
          const t = this.json,
            s = this,
            n = t.nodes[e];
          return void 0 === n.mesh
            ? null
            : s.getDependency('mesh', n.mesh).then(function (e) {
                const t = s._getNodeRef(s.meshCache, n.mesh, e);
                return (
                  void 0 !== n.weights &&
                    t.traverse(function (e) {
                      if (e.isMesh)
                        for (let t = 0, s = n.weights.length; t < s; t++)
                          e.morphTargetInfluences[t] = n.weights[t];
                    }),
                  t
                );
              });
        }
        loadNode(e) {
          const t = this.json,
            s = this.extensions,
            r = this,
            o = t.nodes[e],
            i = o.name ? r.createUniqueName(o.name) : '';
          return (function () {
            const t = [],
              s = r._invokeOne(function (t) {
                return t.createNodeMesh && t.createNodeMesh(e);
              });
            return (
              s && t.push(s),
              void 0 !== o.camera &&
                t.push(
                  r.getDependency('camera', o.camera).then(function (e) {
                    return r._getNodeRef(r.cameraCache, o.camera, e);
                  })
                ),
              r
                ._invokeAll(function (t) {
                  return t.createNodeAttachment && t.createNodeAttachment(e);
                })
                .forEach(function (e) {
                  t.push(e);
                }),
              Promise.all(t)
            );
          })().then(function (t) {
            let a;
            if (
              ((a =
                !0 === o.isBone
                  ? new n.e()
                  : t.length > 1
                  ? new n.u()
                  : 1 === t.length
                  ? t[0]
                  : new n.cb()),
              a !== t[0])
            )
              for (let e = 0, s = t.length; e < s; e++) a.add(t[e]);
            if (
              (o.name && ((a.userData.name = o.name), (a.name = i)),
              B(a, o),
              o.extensions && K(s, a, o),
              void 0 !== o.matrix)
            ) {
              const e = new n.Q();
              e.fromArray(o.matrix), a.applyMatrix4(e);
            } else void 0 !== o.translation && a.position.fromArray(o.translation), void 0 !== o.rotation && a.quaternion.fromArray(o.rotation), void 0 !== o.scale && a.scale.fromArray(o.scale);
            return r.associations.set(a, { type: 'nodes', index: e }), a;
          });
        }
        loadScene(e) {
          const t = this.json,
            s = this.extensions,
            r = this.json.scenes[e],
            o = this,
            i = new n.u();
          r.name && (i.name = o.createUniqueName(r.name)),
            B(i, r),
            r.extensions && K(s, i, r);
          const a = r.nodes || [],
            l = [];
          for (let n = 0, c = a.length; n < c; n++) l.push(J(a[n], i, t, o));
          return Promise.all(l).then(function () {
            return i;
          });
        }
      }
      function J(e, t, s, r) {
        const o = s.nodes[e];
        return r
          .getDependency('node', e)
          .then(function (e) {
            if (void 0 === o.skin) return e;
            let t;
            return r
              .getDependency('skin', o.skin)
              .then(function (e) {
                t = e;
                const s = [];
                for (let n = 0, o = t.joints.length; n < o; n++)
                  s.push(r.getDependency('node', t.joints[n]));
                return Promise.all(s);
              })
              .then(function (s) {
                return (
                  e.traverse(function (e) {
                    if (!e.isMesh) return;
                    const r = [],
                      o = [];
                    for (let i = 0, a = s.length; i < a; i++) {
                      const e = s[i];
                      if (e) {
                        r.push(e);
                        const s = new n.Q();
                        void 0 !== t.inverseBindMatrices &&
                          s.fromArray(t.inverseBindMatrices.array, 16 * i),
                          o.push(s);
                      } else
                        console.warn(
                          'THREE.GLTFLoader: Joint "%s" could not be found.',
                          t.joints[i]
                        );
                    }
                    e.bind(new n.ub(r, o), e.matrixWorld);
                  }),
                  e
                );
              });
          })
          .then(function (e) {
            t.add(e);
            const n = [];
            if (o.children) {
              const t = o.children;
              for (let o = 0, i = t.length; o < i; o++) {
                const i = t[o];
                n.push(J(i, e, s, r));
              }
            }
            return Promise.all(n);
          });
      }
      function Y(e, t, s) {
        const r = t.attributes,
          o = [];
        function i(t, n) {
          return s.getDependency('accessor', t).then(function (t) {
            e.setAttribute(n, t);
          });
        }
        for (const n in r) {
          const t = H[n] || n.toLowerCase();
          t in e.attributes || o.push(i(r[n], t));
        }
        if (void 0 !== t.indices && !e.index) {
          const n = s.getDependency('accessor', t.indices).then(function (t) {
            e.setIndex(t);
          });
          o.push(n);
        }
        return (
          B(e, t),
          (function (e, t, s) {
            const r = t.attributes,
              o = new n.f();
            if (void 0 === r.POSITION) return;
            {
              const e = s.json.accessors[r.POSITION],
                t = e.min,
                i = e.max;
              if (void 0 === t || void 0 === i)
                return void console.warn(
                  'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.'
                );
              if (
                (o.set(new n.Kb(t[0], t[1], t[2]), new n.Kb(i[0], i[1], i[2])),
                e.normalized)
              ) {
                const t = z(P[e.componentType]);
                o.min.multiplyScalar(t), o.max.multiplyScalar(t);
              }
            }
            const i = t.targets;
            if (void 0 !== i) {
              const e = new n.Kb(),
                t = new n.Kb();
              for (let n = 0, r = i.length; n < r; n++) {
                const r = i[n];
                if (void 0 !== r.POSITION) {
                  const n = s.json.accessors[r.POSITION],
                    o = n.min,
                    i = n.max;
                  if (void 0 !== o && void 0 !== i) {
                    if (
                      (t.setX(Math.max(Math.abs(o[0]), Math.abs(i[0]))),
                      t.setY(Math.max(Math.abs(o[1]), Math.abs(i[1]))),
                      t.setZ(Math.max(Math.abs(o[2]), Math.abs(i[2]))),
                      n.normalized)
                    ) {
                      const e = z(P[n.componentType]);
                      t.multiplyScalar(e);
                    }
                    e.max(t);
                  } else
                    console.warn(
                      'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.'
                    );
                }
              }
              o.expandByVector(e);
            }
            e.boundingBox = o;
            const a = new n.wb();
            o.getCenter(a.center),
              (a.radius = o.min.distanceTo(o.max) / 2),
              (e.boundingSphere = a);
          })(e, t, s),
          Promise.all(o).then(function () {
            return void 0 !== t.targets
              ? (function (e, t, s) {
                  let n = !1,
                    r = !1;
                  for (let a = 0, l = t.length; a < l; a++) {
                    const e = t[a];
                    if (
                      (void 0 !== e.POSITION && (n = !0),
                      void 0 !== e.NORMAL && (r = !0),
                      n && r)
                    )
                      break;
                  }
                  if (!n && !r) return Promise.resolve(e);
                  const o = [],
                    i = [];
                  for (let a = 0, l = t.length; a < l; a++) {
                    const l = t[a];
                    if (n) {
                      const t =
                        void 0 !== l.POSITION
                          ? s.getDependency('accessor', l.POSITION)
                          : e.attributes.position;
                      o.push(t);
                    }
                    if (r) {
                      const t =
                        void 0 !== l.NORMAL
                          ? s.getDependency('accessor', l.NORMAL)
                          : e.attributes.normal;
                      i.push(t);
                    }
                  }
                  return Promise.all([Promise.all(o), Promise.all(i)]).then(function (t) {
                    const s = t[0],
                      o = t[1];
                    return (
                      n && (e.morphAttributes.position = s),
                      r && (e.morphAttributes.normal = o),
                      (e.morphTargetsRelative = !0),
                      e
                    );
                  });
                })(e, t.targets, s)
              : e;
          })
        );
      }
      function Q(e, t) {
        let s = e.getIndex();
        if (null === s) {
          const t = [],
            n = e.getAttribute('position');
          if (void 0 === n)
            return (
              console.error(
                'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.'
              ),
              e
            );
          for (let e = 0; e < n.count; e++) t.push(e);
          e.setIndex(t), (s = e.getIndex());
        }
        const r = s.count - 2,
          o = [];
        if (t === n.Eb)
          for (let n = 1; n <= r; n++)
            o.push(s.getX(0)), o.push(s.getX(n)), o.push(s.getX(n + 1));
        else
          for (let n = 0; n < r; n++)
            n % 2 === 0
              ? (o.push(s.getX(n)), o.push(s.getX(n + 1)), o.push(s.getX(n + 2)))
              : (o.push(s.getX(n + 2)), o.push(s.getX(n + 1)), o.push(s.getX(n)));
        o.length / 3 !== r &&
          console.error(
            'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.'
          );
        const i = e.clone();
        return i.setIndex(o), i;
      }
    },
  },
]);
//# sourceMappingURL=2.ca61586b.chunk.js.map
