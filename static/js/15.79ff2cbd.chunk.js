(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [15],
  {
    96: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var o = n(71);
      class a extends o.m {
        constructor(e) {
          super(e), (this.type = o.Ib);
        }
        parse(e) {
          const t = function (e, t) {
              switch (e) {
                case 1:
                  console.error('THREE.RGBELoader Read Error: ' + (t || ''));
                  break;
                case 2:
                  console.error('THREE.RGBELoader Write Error: ' + (t || ''));
                  break;
                case 3:
                  console.error('THREE.RGBELoader Bad File Format: ' + (t || ''));
                  break;
                default:
                case 4:
                  console.error('THREE.RGBELoader: Error: ' + (t || ''));
              }
              return -1;
            },
            n = function (e, t, n) {
              t = t || 1024;
              let o = e.pos,
                a = -1,
                i = 0,
                s = '',
                r = String.fromCharCode.apply(
                  null,
                  new Uint16Array(e.subarray(o, o + 128))
                );
              for (; 0 > (a = r.indexOf('\n')) && i < t && o < e.byteLength; )
                (s += r),
                  (i += r.length),
                  (o += 128),
                  (r += String.fromCharCode.apply(
                    null,
                    new Uint16Array(e.subarray(o, o + 128))
                  ));
              return -1 < a && (!1 !== n && (e.pos += i + a + 1), s + r.slice(0, a));
            },
            a = function (e, t, n, o) {
              const a = e[t + 3],
                i = Math.pow(2, a - 128) / 255;
              (n[o + 0] = e[t + 0] * i),
                (n[o + 1] = e[t + 1] * i),
                (n[o + 2] = e[t + 2] * i);
            },
            i = function (e, t, n, a) {
              const i = e[t + 3],
                s = Math.pow(2, i - 128) / 255;
              (n[a + 0] = o.n.toHalfFloat(e[t + 0] * s)),
                (n[a + 1] = o.n.toHalfFloat(e[t + 1] * s)),
                (n[a + 2] = o.n.toHalfFloat(e[t + 2] * s));
            },
            s = new Uint8Array(e);
          s.pos = 0;
          const r = (function (e) {
            const o = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
              a = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
              i = /^\s*FORMAT=(\S+)\s*$/,
              s = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
              r = {
                valid: 0,
                string: '',
                comments: '',
                programtype: 'RGBE',
                format: '',
                gamma: 1,
                exposure: 1,
                width: 0,
                height: 0,
              };
            let c, l;
            if (e.pos >= e.byteLength || !(c = n(e))) return t(1, 'no header found');
            if (!(l = c.match(/^#\?(\S+)/))) return t(3, 'bad initial token');
            for (
              r.valid |= 1, r.programtype = l[1], r.string += c + '\n';
              (c = n(e)), !1 !== c;

            )
              if (((r.string += c + '\n'), '#' !== c.charAt(0))) {
                if (
                  ((l = c.match(o)) && (r.gamma = parseFloat(l[1], 10)),
                  (l = c.match(a)) && (r.exposure = parseFloat(l[1], 10)),
                  (l = c.match(i)) && ((r.valid |= 2), (r.format = l[1])),
                  (l = c.match(s)) &&
                    ((r.valid |= 4),
                    (r.height = parseInt(l[1], 10)),
                    (r.width = parseInt(l[2], 10))),
                  2 & r.valid && 4 & r.valid)
                )
                  break;
              } else r.comments += c + '\n';
            return 2 & r.valid
              ? 4 & r.valid
                ? r
                : t(3, 'missing image size specifier')
              : t(3, 'missing format specifier');
          })(s);
          if (-1 !== r) {
            const e = r.width,
              n = r.height,
              c = (function (e, n, o) {
                const a = n;
                if (a < 8 || a > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2])
                  return new Uint8Array(e);
                if (a !== ((e[2] << 8) | e[3])) return t(3, 'wrong scanline width');
                const i = new Uint8Array(4 * n * o);
                if (!i.length) return t(4, 'unable to allocate buffer space');
                let s = 0,
                  r = 0;
                const c = 4 * a,
                  l = new Uint8Array(4),
                  u = new Uint8Array(c);
                let m = o;
                for (; m > 0 && r < e.byteLength; ) {
                  if (r + 4 > e.byteLength) return t(1);
                  if (
                    ((l[0] = e[r++]),
                    (l[1] = e[r++]),
                    (l[2] = e[r++]),
                    (l[3] = e[r++]),
                    2 != l[0] || 2 != l[1] || ((l[2] << 8) | l[3]) != a)
                  )
                    return t(3, 'bad rgbe scanline format');
                  let n,
                    o = 0;
                  for (; o < c && r < e.byteLength; ) {
                    n = e[r++];
                    const a = n > 128;
                    if ((a && (n -= 128), 0 === n || o + n > c))
                      return t(3, 'bad scanline data');
                    if (a) {
                      const t = e[r++];
                      for (let e = 0; e < n; e++) u[o++] = t;
                    } else u.set(e.subarray(r, r + n), o), (o += n), (r += n);
                  }
                  const h = a;
                  for (let e = 0; e < h; e++) {
                    let t = 0;
                    (i[s] = u[e + t]),
                      (t += a),
                      (i[s + 1] = u[e + t]),
                      (t += a),
                      (i[s + 2] = u[e + t]),
                      (t += a),
                      (i[s + 3] = u[e + t]),
                      (s += 4);
                  }
                  m--;
                }
                return i;
              })(s.subarray(s.pos), e, n);
            if (-1 !== c) {
              let t, s, l, u;
              switch (this.type) {
                case o.Ib:
                  (t = c), (s = o.ob), (l = o.Ib);
                  break;
                case o.s:
                  u = (c.length / 4) * 3;
                  const e = new Float32Array(u);
                  for (let t = 0; t < u; t++) a(c, 4 * t, e, 3 * t);
                  (t = e), (s = o.pb), (l = o.s);
                  break;
                case o.v:
                  u = (c.length / 4) * 3;
                  const n = new Uint16Array(u);
                  for (let t = 0; t < u; t++) i(c, 4 * t, n, 3 * t);
                  (t = n), (s = o.pb), (l = o.v);
                  break;
                default:
                  console.error('THREE.RGBELoader: unsupported type: ', this.type);
              }
              return {
                width: e,
                height: n,
                data: t,
                header: r.string,
                gamma: r.gamma,
                exposure: r.exposure,
                format: s,
                type: l,
              };
            }
          }
          return null;
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, n, a) {
          return super.load(
            e,
            function (e, n) {
              switch (e.type) {
                case o.Ib:
                  (e.encoding = o.nb),
                    (e.minFilter = o.Y),
                    (e.magFilter = o.Y),
                    (e.generateMipmaps = !1),
                    (e.flipY = !0);
                  break;
                case o.s:
                case o.v:
                  (e.encoding = o.G),
                    (e.minFilter = o.H),
                    (e.magFilter = o.H),
                    (e.generateMipmaps = !1),
                    (e.flipY = !0);
              }
              t && t(e, n);
            },
            n,
            a
          );
        }
      }
    },
    97: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n(71);
      const a = { type: 'change' },
        i = { type: 'start' },
        s = { type: 'end' };
      class r extends o.q {
        constructor(e, t) {
          super(),
            void 0 === t &&
              console.warn(
                'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'
              ),
            t === document &&
              console.error(
                'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
              ),
            (this.object = e),
            (this.domElement = t),
            (this.enabled = !0),
            (this.target = new o.Kb()),
            (this.minDistance = 0),
            (this.maxDistance = 1 / 0),
            (this.minZoom = 0),
            (this.maxZoom = 1 / 0),
            (this.minPolarAngle = 0),
            (this.maxPolarAngle = Math.PI),
            (this.minAzimuthAngle = -1 / 0),
            (this.maxAzimuthAngle = 1 / 0),
            (this.enableDamping = !1),
            (this.dampingFactor = 0.05),
            (this.enableZoom = !0),
            (this.zoomSpeed = 1),
            (this.enableRotate = !0),
            (this.rotateSpeed = 1),
            (this.enablePan = !0),
            (this.panSpeed = 1),
            (this.screenSpacePanning = !0),
            (this.keyPanSpeed = 7),
            (this.autoRotate = !1),
            (this.autoRotateSpeed = 2),
            (this.keys = {
              LEFT: 'ArrowLeft',
              UP: 'ArrowUp',
              RIGHT: 'ArrowRight',
              BOTTOM: 'ArrowDown',
            }),
            (this.mouseButtons = { LEFT: o.N.ROTATE, MIDDLE: o.N.DOLLY, RIGHT: o.N.PAN }),
            (this.touches = { ONE: o.Bb.ROTATE, TWO: o.Bb.DOLLY_PAN }),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object.zoom),
            (this._domElementKeyEvents = null),
            (this.getPolarAngle = function () {
              return u.phi;
            }),
            (this.getAzimuthalAngle = function () {
              return u.theta;
            }),
            (this.listenToKeyEvents = function (e) {
              e.addEventListener('keydown', Z), (this._domElementKeyEvents = e);
            }),
            (this.saveState = function () {
              n.target0.copy(n.target),
                n.position0.copy(n.object.position),
                (n.zoom0 = n.object.zoom);
            }),
            (this.reset = function () {
              n.target.copy(n.target0),
                n.object.position.copy(n.position0),
                (n.object.zoom = n.zoom0),
                n.object.updateProjectionMatrix(),
                n.dispatchEvent(a),
                n.update(),
                (c = r.NONE);
            }),
            (this.update = (function () {
              const t = new o.Kb(),
                i = new o.lb().setFromUnitVectors(e.up, new o.Kb(0, 1, 0)),
                s = i.clone().invert(),
                b = new o.Kb(),
                f = new o.lb(),
                E = 2 * Math.PI;
              return function () {
                const e = n.object.position;
                t.copy(e).sub(n.target),
                  t.applyQuaternion(i),
                  u.setFromVector3(t),
                  n.autoRotate &&
                    c === r.NONE &&
                    L(((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed),
                  n.enableDamping
                    ? ((u.theta += m.theta * n.dampingFactor),
                      (u.phi += m.phi * n.dampingFactor))
                    : ((u.theta += m.theta), (u.phi += m.phi));
                let o = n.minAzimuthAngle,
                  g = n.maxAzimuthAngle;
                return (
                  isFinite(o) &&
                    isFinite(g) &&
                    (o < -Math.PI ? (o += E) : o > Math.PI && (o -= E),
                    g < -Math.PI ? (g += E) : g > Math.PI && (g -= E),
                    (u.theta =
                      o <= g
                        ? Math.max(o, Math.min(g, u.theta))
                        : u.theta > (o + g) / 2
                        ? Math.max(o, u.theta)
                        : Math.min(g, u.theta))),
                  (u.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, u.phi))),
                  u.makeSafe(),
                  (u.radius *= h),
                  (u.radius = Math.max(n.minDistance, Math.min(n.maxDistance, u.radius))),
                  !0 === n.enableDamping
                    ? n.target.addScaledVector(p, n.dampingFactor)
                    : n.target.add(p),
                  t.setFromSpherical(u),
                  t.applyQuaternion(s),
                  e.copy(n.target).add(t),
                  n.object.lookAt(n.target),
                  !0 === n.enableDamping
                    ? ((m.theta *= 1 - n.dampingFactor),
                      (m.phi *= 1 - n.dampingFactor),
                      p.multiplyScalar(1 - n.dampingFactor))
                    : (m.set(0, 0, 0), p.set(0, 0, 0)),
                  (h = 1),
                  !!(
                    d ||
                    b.distanceToSquared(n.object.position) > l ||
                    8 * (1 - f.dot(n.object.quaternion)) > l
                  ) &&
                    (n.dispatchEvent(a),
                    b.copy(n.object.position),
                    f.copy(n.object.quaternion),
                    (d = !1),
                    !0)
                );
              };
            })()),
            (this.dispose = function () {
              n.domElement.removeEventListener('contextmenu', J),
                n.domElement.removeEventListener('pointerdown', U),
                n.domElement.removeEventListener('wheel', z),
                n.domElement.removeEventListener('touchstart', B),
                n.domElement.removeEventListener('touchend', G),
                n.domElement.removeEventListener('touchmove', K),
                n.domElement.ownerDocument.removeEventListener('pointermove', _),
                n.domElement.ownerDocument.removeEventListener('pointerup', X),
                null !== n._domElementKeyEvents &&
                  n._domElementKeyEvents.removeEventListener('keydown', Z);
            });
          const n = this,
            r = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6,
            };
          let c = r.NONE;
          const l = 1e-6,
            u = new o.yb(),
            m = new o.yb();
          let h = 1;
          const p = new o.Kb();
          let d = !1;
          const b = new o.Jb(),
            f = new o.Jb(),
            E = new o.Jb(),
            g = new o.Jb(),
            y = new o.Jb(),
            w = new o.Jb(),
            v = new o.Jb(),
            O = new o.Jb(),
            T = new o.Jb();
          function A() {
            return Math.pow(0.95, n.zoomSpeed);
          }
          function L(e) {
            m.theta -= e;
          }
          function P(e) {
            m.phi -= e;
          }
          const N = (function () {
              const e = new o.Kb();
              return function (t, n) {
                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), p.add(e);
              };
            })(),
            R = (function () {
              const e = new o.Kb();
              return function (t, o) {
                !0 === n.screenSpacePanning
                  ? e.setFromMatrixColumn(o, 1)
                  : (e.setFromMatrixColumn(o, 0), e.crossVectors(n.object.up, e)),
                  e.multiplyScalar(t),
                  p.add(e);
              };
            })(),
            k = (function () {
              const e = new o.Kb();
              return function (t, o) {
                const a = n.domElement;
                if (n.object.isPerspectiveCamera) {
                  const i = n.object.position;
                  e.copy(i).sub(n.target);
                  let s = e.length();
                  (s *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
                    N((2 * t * s) / a.clientHeight, n.object.matrix),
                    R((2 * o * s) / a.clientHeight, n.object.matrix);
                } else
                  n.object.isOrthographicCamera
                    ? (N(
                        (t * (n.object.right - n.object.left)) /
                          n.object.zoom /
                          a.clientWidth,
                        n.object.matrix
                      ),
                      R(
                        (o * (n.object.top - n.object.bottom)) /
                          n.object.zoom /
                          a.clientHeight,
                        n.object.matrix
                      ))
                    : (console.warn(
                        'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'
                      ),
                      (n.enablePan = !1));
              };
            })();
          function M(e) {
            n.object.isPerspectiveCamera
              ? (h /= e)
              : n.object.isOrthographicCamera
              ? ((n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom * e)
                )),
                n.object.updateProjectionMatrix(),
                (d = !0))
              : (console.warn(
                  'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
                ),
                (n.enableZoom = !1));
          }
          function j(e) {
            n.object.isPerspectiveCamera
              ? (h *= e)
              : n.object.isOrthographicCamera
              ? ((n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom / e)
                )),
                n.object.updateProjectionMatrix(),
                (d = !0))
              : (console.warn(
                  'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
                ),
                (n.enableZoom = !1));
          }
          function Y(e) {
            b.set(e.clientX, e.clientY);
          }
          function D(e) {
            g.set(e.clientX, e.clientY);
          }
          function x(e) {
            if (1 == e.touches.length) b.set(e.touches[0].pageX, e.touches[0].pageY);
            else {
              const t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
                n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
              b.set(t, n);
            }
          }
          function H(e) {
            if (1 == e.touches.length) g.set(e.touches[0].pageX, e.touches[0].pageY);
            else {
              const t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
                n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
              g.set(t, n);
            }
          }
          function S(e) {
            const t = e.touches[0].pageX - e.touches[1].pageX,
              n = e.touches[0].pageY - e.touches[1].pageY,
              o = Math.sqrt(t * t + n * n);
            v.set(0, o);
          }
          function F(e) {
            if (1 == e.touches.length) f.set(e.touches[0].pageX, e.touches[0].pageY);
            else {
              const t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
                n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
              f.set(t, n);
            }
            E.subVectors(f, b).multiplyScalar(n.rotateSpeed);
            const t = n.domElement;
            L((2 * Math.PI * E.x) / t.clientHeight),
              P((2 * Math.PI * E.y) / t.clientHeight),
              b.copy(f);
          }
          function C(e) {
            if (1 == e.touches.length) y.set(e.touches[0].pageX, e.touches[0].pageY);
            else {
              const t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
                n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
              y.set(t, n);
            }
            w.subVectors(y, g).multiplyScalar(n.panSpeed), k(w.x, w.y), g.copy(y);
          }
          function I(e) {
            const t = e.touches[0].pageX - e.touches[1].pageX,
              o = e.touches[0].pageY - e.touches[1].pageY,
              a = Math.sqrt(t * t + o * o);
            O.set(0, a), T.set(0, Math.pow(O.y / v.y, n.zoomSpeed)), M(T.y), v.copy(O);
          }
          function U(e) {
            if (!1 !== n.enabled)
              switch (e.pointerType) {
                case 'mouse':
                case 'pen':
                  !(function (e) {
                    let t;
                    switch (
                      (e.preventDefault(),
                      n.domElement.focus ? n.domElement.focus() : window.focus(),
                      e.button)
                    ) {
                      case 0:
                        t = n.mouseButtons.LEFT;
                        break;
                      case 1:
                        t = n.mouseButtons.MIDDLE;
                        break;
                      case 2:
                        t = n.mouseButtons.RIGHT;
                        break;
                      default:
                        t = -1;
                    }
                    switch (t) {
                      case o.N.DOLLY:
                        if (!1 === n.enableZoom) return;
                        !(function (e) {
                          v.set(e.clientX, e.clientY);
                        })(e),
                          (c = r.DOLLY);
                        break;
                      case o.N.ROTATE:
                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                          if (!1 === n.enablePan) return;
                          D(e), (c = r.PAN);
                        } else {
                          if (!1 === n.enableRotate) return;
                          Y(e), (c = r.ROTATE);
                        }
                        break;
                      case o.N.PAN:
                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                          if (!1 === n.enableRotate) return;
                          Y(e), (c = r.ROTATE);
                        } else {
                          if (!1 === n.enablePan) return;
                          D(e), (c = r.PAN);
                        }
                        break;
                      default:
                        c = r.NONE;
                    }
                    c !== r.NONE &&
                      (n.domElement.ownerDocument.addEventListener('pointermove', _),
                      n.domElement.ownerDocument.addEventListener('pointerup', X),
                      n.dispatchEvent(i));
                  })(e);
              }
          }
          function _(e) {
            if (!1 !== n.enabled)
              switch (e.pointerType) {
                case 'mouse':
                case 'pen':
                  !(function (e) {
                    if (!1 === n.enabled) return;
                    switch ((e.preventDefault(), c)) {
                      case r.ROTATE:
                        if (!1 === n.enableRotate) return;
                        !(function (e) {
                          f.set(e.clientX, e.clientY),
                            E.subVectors(f, b).multiplyScalar(n.rotateSpeed);
                          const t = n.domElement;
                          L((2 * Math.PI * E.x) / t.clientHeight),
                            P((2 * Math.PI * E.y) / t.clientHeight),
                            b.copy(f),
                            n.update();
                        })(e);
                        break;
                      case r.DOLLY:
                        if (!1 === n.enableZoom) return;
                        !(function (e) {
                          O.set(e.clientX, e.clientY),
                            T.subVectors(O, v),
                            T.y > 0 ? M(A()) : T.y < 0 && j(A()),
                            v.copy(O),
                            n.update();
                        })(e);
                        break;
                      case r.PAN:
                        if (!1 === n.enablePan) return;
                        !(function (e) {
                          y.set(e.clientX, e.clientY),
                            w.subVectors(y, g).multiplyScalar(n.panSpeed),
                            k(w.x, w.y),
                            g.copy(y),
                            n.update();
                        })(e);
                    }
                  })(e);
              }
          }
          function X(e) {
            switch (e.pointerType) {
              case 'mouse':
              case 'pen':
                !(function (e) {
                  if (
                    (n.domElement.ownerDocument.removeEventListener('pointermove', _),
                    n.domElement.ownerDocument.removeEventListener('pointerup', X),
                    !1 === n.enabled)
                  )
                    return;
                  n.dispatchEvent(s), (c = r.NONE);
                })();
            }
          }
          function z(e) {
            !1 === n.enabled ||
              !1 === n.enableZoom ||
              (c !== r.NONE && c !== r.ROTATE) ||
              (e.preventDefault(),
              n.dispatchEvent(i),
              (function (e) {
                e.deltaY < 0 ? j(A()) : e.deltaY > 0 && M(A()), n.update();
              })(e),
              n.dispatchEvent(s));
          }
          function Z(e) {
            !1 !== n.enabled &&
              !1 !== n.enablePan &&
              (function (e) {
                let t = !1;
                switch (e.code) {
                  case n.keys.UP:
                    k(0, n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.BOTTOM:
                    k(0, -n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.LEFT:
                    k(n.keyPanSpeed, 0), (t = !0);
                    break;
                  case n.keys.RIGHT:
                    k(-n.keyPanSpeed, 0), (t = !0);
                }
                t && (e.preventDefault(), n.update());
              })(e);
          }
          function B(e) {
            if (!1 !== n.enabled) {
              switch ((e.preventDefault(), e.touches.length)) {
                case 1:
                  switch (n.touches.ONE) {
                    case o.Bb.ROTATE:
                      if (!1 === n.enableRotate) return;
                      x(e), (c = r.TOUCH_ROTATE);
                      break;
                    case o.Bb.PAN:
                      if (!1 === n.enablePan) return;
                      H(e), (c = r.TOUCH_PAN);
                      break;
                    default:
                      c = r.NONE;
                  }
                  break;
                case 2:
                  switch (n.touches.TWO) {
                    case o.Bb.DOLLY_PAN:
                      if (!1 === n.enableZoom && !1 === n.enablePan) return;
                      !(function (e) {
                        n.enableZoom && S(e), n.enablePan && H(e);
                      })(e),
                        (c = r.TOUCH_DOLLY_PAN);
                      break;
                    case o.Bb.DOLLY_ROTATE:
                      if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                      !(function (e) {
                        n.enableZoom && S(e), n.enableRotate && x(e);
                      })(e),
                        (c = r.TOUCH_DOLLY_ROTATE);
                      break;
                    default:
                      c = r.NONE;
                  }
                  break;
                default:
                  c = r.NONE;
              }
              c !== r.NONE && n.dispatchEvent(i);
            }
          }
          function K(e) {
            if (!1 !== n.enabled)
              switch ((e.preventDefault(), c)) {
                case r.TOUCH_ROTATE:
                  if (!1 === n.enableRotate) return;
                  F(e), n.update();
                  break;
                case r.TOUCH_PAN:
                  if (!1 === n.enablePan) return;
                  C(e), n.update();
                  break;
                case r.TOUCH_DOLLY_PAN:
                  if (!1 === n.enableZoom && !1 === n.enablePan) return;
                  !(function (e) {
                    n.enableZoom && I(e), n.enablePan && C(e);
                  })(e),
                    n.update();
                  break;
                case r.TOUCH_DOLLY_ROTATE:
                  if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                  !(function (e) {
                    n.enableZoom && I(e), n.enableRotate && F(e);
                  })(e),
                    n.update();
                  break;
                default:
                  c = r.NONE;
              }
          }
          function G(e) {
            !1 !== n.enabled && (n.dispatchEvent(s), (c = r.NONE));
          }
          function J(e) {
            !1 !== n.enabled && e.preventDefault();
          }
          n.domElement.addEventListener('contextmenu', J),
            n.domElement.addEventListener('pointerdown', U),
            n.domElement.addEventListener('wheel', z, { passive: !1 }),
            n.domElement.addEventListener('touchstart', B, { passive: !1 }),
            n.domElement.addEventListener('touchend', G),
            n.domElement.addEventListener('touchmove', K, { passive: !1 }),
            this.update();
        }
      }
    },
  },
]);
//# sourceMappingURL=15.79ff2cbd.chunk.js.map
