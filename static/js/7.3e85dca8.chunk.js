(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [7],
  {
    107: function (e, t, A) {
      'use strict';
      A.r(t);
      var n = A(1),
        c = A(0),
        i = A(20),
        r = A(9),
        s = A(69),
        a = A(72),
        o = A(28),
        l = A(63),
        d = A(4),
        g = A.n(d),
        u = A(23),
        h = A(2),
        E = A(16);
      A(95);
      const j = Object(c.createContext)({}),
        b = ({ children: e, ...t }) => {
          const {
              optionRefs: A,
              currentIndex: i,
              onChange: r,
              registerOption: s,
            } = Object(c.useContext)(j),
            a = Object(c.useRef)(),
            o = A.current.indexOf(a),
            l = i === o;
          return (
            Object(c.useLayoutEffect)(() => {
              s(a);
            }, [s]),
            Object(n.jsx)('button', {
              className: 'segmented-control__button',
              tabIndex: l ? 0 : -1,
              role: 'radio',
              'aria-checked': l,
              onClick: () => r(o),
              onMouseUp: E.a,
              ref: a,
              ...t,
              children: e,
            })
          );
        };
      var m = ({ children: e, currentIndex: t, onChange: A, label: i, ...s }) => {
          const a = `segmented-control-label-${Object(r.c)()}`,
            o = Object(c.useRef)([]),
            [l, d] = Object(c.useState)(),
            E = Object(c.useCallback)(e => {
              o.current = [...o.current, e];
            }, []);
          return (
            Object(c.useLayoutEffect)(() => {
              var e;
              const A = null === (e = o.current[t]) || void 0 === e ? void 0 : e.current,
                n = new ResizeObserver(() => {
                  const e =
                      null === A || void 0 === A ? void 0 : A.getBoundingClientRect(),
                    t = null === A || void 0 === A ? void 0 : A.offsetLeft;
                  d({ width: null === e || void 0 === e ? void 0 : e.width, left: t });
                });
              return (
                n.observe(A),
                () => {
                  n.disconnect();
                }
              );
            }, [t]),
            Object(n.jsx)(j.Provider, {
              value: { optionRefs: o, currentIndex: t, onChange: A, registerOption: E },
              children: Object(n.jsxs)('div', {
                className: 'segmented-control',
                role: 'radiogroup',
                'aria-labelledby': a,
                onKeyDown: e => {
                  const { length: n } = o.current,
                    c = (t - 1 + n) % n,
                    i = (t + 1) % n;
                  ['ArrowLeft', 'ArrowUp'].includes(e.key)
                    ? (A(c), o.current[c].current.focus())
                    : ['ArrowRight', 'ArrowDown'].includes(e.key) &&
                      (A(i), o.current[i].current.focus());
                },
                ...s,
                children: [
                  Object(n.jsx)(u.a, {
                    as: 'label',
                    className: 'segmented-control__label',
                    id: a,
                    children: i,
                  }),
                  Object(n.jsxs)('div', {
                    className: 'segmented-control__options',
                    children: [
                      !!l &&
                        Object(n.jsx)('div', {
                          className: g()('segmented-control__indicator', {
                            'segmented-control__indicator--last':
                              t === o.current.length - 1,
                          }),
                          style: {
                            '--left': Object(h.d)(l.left),
                            '--width': Object(h.d)(l.width),
                          },
                        }),
                      e,
                    ],
                  }),
                ],
              }),
            })
          );
        },
        w = A(27),
        B = A.p + 'static/media/spr-background.209ef89e.jpg',
        p = A.p + 'static/media/spr-background-large.e07fddb4.jpg',
        v = A.p + 'static/media/spr-lesson-builder-light.529a5845.jpg',
        f = A.p + 'static/media/spr-lesson-builder-light-large.770fee6b.jpg',
        O = A(81),
        Q = A(82),
        I = A(80),
        C = A.p + 'static/media/spr-components-dark.78046667.png',
        M = A.p + 'static/media/spr-components-dark-large.1ba99861.png',
        x = A.p + 'static/media/spr-components-light.f8804d03.png',
        k = A.p + 'static/media/spr-components-light-large.9dabe6ac.png',
        R = A.p + 'static/media/spr-design-system-dark.fb054113.png',
        D = A.p + 'static/media/spr-design-system-dark-large.119671d0.png',
        N = A.p + 'static/media/spr-design-system-light.675b2ce3.png',
        U = A.p + 'static/media/spr-design-system-light-large.3a367c72.png',
        S = A.p + 'static/media/spr-storyboarder-dark.851491e0.png',
        P = A.p + 'static/media/spr-storyboarder-dark-large.35bd80f8.png',
        y = A.p + 'static/media/spr-storyboarder-light.74ac5327.png',
        J = A.p + 'static/media/spr-storyboarder-light-large.debe399b.png',
        H = A.p + 'static/media/spr-background-volcanism.78c28bca.jpg',
        L = A.p + 'static/media/spr-background-volcanism-large.930ecd6b.jpg',
        V = A.p + 'static/media/spr-schema-1-light-large.d3e4caf3.png',
        Y = A.p + 'static/media/spr-schema-1-dark-large.a01d709e.png',
        z = A.p + 'static/media/spr-schema-2-light-large.10457561.png',
        T = A.p + 'static/media/spr-schema-2-dark-large.c385be12.png',
        Z = A.p + 'static/media/spr-motion.d0f8ead1.mp4',
        G = A.p + 'static/media/spr-motion-large.94bad4bb.mp4',
        F = A(71),
        W = A(86),
        X = A(96),
        K = A(97),
        q = A(74),
        _ = A.p + 'static/media/milkyway.f163dead.jpg',
        $ = A.p + 'static/media/milkyway.8aafe737.hdr',
        ee = A.p + 'static/media/earth.081bcc3d.glb',
        te = A(76);
      A(98);
      const Ae = { x: 0, y: 0, z: 2 },
        ne = (e, t, A) => e + A * (t - e),
        ce = e =>
          Object.keys(e)
            .map(t => parseFloat(Math.round(100 * e[t]) / 100).toFixed(2))
            .join(', '),
        ie = e =>
          e && e.camera ? { x: e.camera[0], y: e.camera[1], z: e.camera[2] } : Ae,
        re = Object(c.createContext)({}),
        se = Object(c.forwardRef)(
          (
            {
              position: e = [0, 0, 0],
              scale: t = 1,
              hideMeshes: A = [],
              labels: i = [],
              className: s,
              children: a,
            },
            o
          ) => {
            const [l, d] = Object(c.useState)(!1),
              [u, E] = Object(c.useState)(!1),
              j = Object(c.useRef)([]),
              b = Object(c.useRef)(),
              m = o || b,
              w = Object(c.useRef)(),
              B = Object(c.useRef)(),
              p = Object(c.useRef)(),
              v = Object(c.useRef)(),
              f = Object(c.useRef)(),
              O = Object(c.useRef)(),
              Q = Object(c.useRef)(),
              I = Object(c.useRef)(),
              C = Object(c.useRef)(),
              M = Object(c.useRef)(),
              x = Object(c.useRef)(),
              k = Object(c.useRef)(!1),
              R = Object(r.d)(B),
              D = Object(c.useRef)(),
              N = Object(c.useRef)(ie(j.current[0])),
              U = Object(c.useRef)([]),
              S = Object(c.useRef)(),
              P = Object(c.useRef)(),
              y = Object(c.useRef)(),
              J = Object(c.useRef)(),
              H = Object(c.useRef)(),
              L = Object(c.useRef)(),
              V = Object(c.useRef)(),
              { width: Y, height: z } = Object(r.l)(),
              T = Object(r.h)(),
              Z = Object(c.useCallback)(() => {
                if (!R) return void cancelAnimationFrame(D.current);
                D.current = requestAnimationFrame(Z);
                const e = O.current.getDelta();
                x.current.update(e),
                  P.current.update(),
                  v.current.render(p.current, f.current),
                  U.current.forEach(e => {
                    const { element: t, position: A, sprite: n } = e,
                      c = new F.Kb(...A),
                      i = f.current.position.distanceTo(C.current.position),
                      r = f.current.position.distanceTo(n.position) > i;
                    c.project(f.current),
                      (c.x = Math.round((0.5 + c.x / 2) * window.innerWidth)),
                      (c.y = Math.round((0.5 - c.y / 2) * window.innerHeight)),
                      (t.style.transform = `translate3d(-50%, -50%, 0) translate3d(${c.x}px, ${c.y}px, 0)`),
                      r
                        ? t.classList.add('earth__label--occluded')
                        : t.classList.remove('earth__label--occluded');
                  });
              }, [R]);
            Object(c.useEffect)(() => {
              V.current = !0;
              const { innerWidth: e, innerHeight: t } = window;
              (v.current = new F.Ob({
                canvas: B.current,
                antialias: !1,
                powerPreference: 'high-performance',
              })),
                v.current.setPixelRatio(1),
                (v.current.outputEncoding = F.Pb),
                (v.current.physicallyCorrectLights = !0),
                (v.current.toneMapping = F.a),
                (f.current = new F.fb(54, e / t, 0.1, 100)),
                (f.current.position.x = N.current.x),
                (f.current.position.y = N.current.y),
                (f.current.position.z = N.current.z),
                f.current.lookAt(0, 0, 0);
              const A = () => {
                  var e;
                  null === (e = L.current) || void 0 === e || e.stop(), E(!0);
                },
                n = () => E(!1);
              (P.current = new K.a(f.current, B.current)),
                (P.current.enableZoom = !1),
                (P.current.enablePan = !1),
                (P.current.enableDamping = !0),
                (P.current.dampingFactor = 0.1),
                (P.current.rotateSpeed = 0.5),
                P.current.addEventListener('start', A),
                P.current.addEventListener('end', n),
                (p.current = new F.sb()),
                (O.current = new F.k()),
                (I.current = new F.qb());
              const c = new F.b(2236962, 0.05),
                i = new F.o(16777215, 1.5);
              i.position.set(3, 0, 1);
              const r = [c, i];
              return (
                r.forEach(e => p.current.add(e)),
                () => {
                  (V.current = !1),
                    cancelAnimationFrame(D.current),
                    P.current.removeEventListener('start', A),
                    P.current.removeEventListener('end', n),
                    Object(te.c)(r),
                    Object(te.b)(p.current),
                    Object(te.a)(v.current);
                }
              );
            }, []),
              Object(c.useEffect)(() => {
                Y <= h.a.tablet && (P.current.enabled = !1);
              }, [Y]),
              Object(c.useEffect)(() => {
                if (l || k.current) return;
                const A = new W.a(),
                  n = new X.a(),
                  c = new F.Db(),
                  i = new F.eb(v.current);
                i.compileEquirectangularShader();
                const r = async () => {
                    const n = await A.loadAsync(ee);
                    (C.current = n.scene),
                      (M.current = n.animations),
                      (x.current = new F.d(C.current)),
                      (x.current.timeScale = 0.1),
                      C.current.traverse(e => {
                        const { material: t, name: A } = e;
                        'Atmosphere' === A && (t.alphaMap = t.map);
                      }),
                      (C.current.position.x = e[0]),
                      (C.current.position.y = e[1]),
                      (C.current.position.z = e[2]),
                      (C.current.scale.x = t),
                      (C.current.scale.y = t),
                      (C.current.scale.z = t);
                  },
                  s = async () => {
                    const e = await n.setDataType(F.Ib).loadAsync($);
                    (y.current = i.fromEquirectangular(e).texture), i.dispose();
                  },
                  a = async () => {
                    const e = await c.loadAsync(_);
                    e.encoding = F.Pb;
                    const t = new F.Mb(4096);
                    J.current = t.fromEquirectangularTexture(v.current, e);
                  };
                (k.current = !0),
                  (async () => {
                    await Promise.all([a(), s(), r()]),
                      V.current && d(!0),
                      (k.current = !1);
                  })();
              }, [l, e, t]),
              Object(c.useEffect)(
                () => (
                  l &&
                    R &&
                    !H.current &&
                    (p.current.add(C.current),
                    (p.current.environment = y.current),
                    (p.current.background = J.current),
                    (H.current = !0)),
                  l && R && Z(),
                  () => {
                    cancelAnimationFrame(D.current);
                  }
                ),
                [Z, R, l]
              ),
              Object(c.useEffect)(() => {
                l &&
                  ((w.current.innerHTML = ''),
                  (U.current = i.map(e => {
                    const t = document.createElement('div');
                    t.classList.add('earth__label'),
                      t.classList.add('earth__label--hidden'),
                      t.style.setProperty('--delay', `${e.delay || 0}ms`),
                      (t.textContent = e.text),
                      w.current.appendChild(t);
                    const A = new F.Ab();
                    return (
                      A.position.set(...e.position),
                      A.scale.set(60, 60, 1),
                      { element: t, ...e, sprite: A }
                    );
                  })));
              }, [i, l]),
              Object(c.useEffect)(() => {
                v.current.setSize(Y, z),
                  (f.current.aspect = Y / z),
                  f.current.updateProjectionMatrix();
              }, [Y, z]),
              Object(c.useEffect)(() => {
                const e = B.current,
                  t = e => {
                    const { innerWidth: t, innerHeight: A } = window,
                      n = ce(f.current.position);
                    console.log({ cameraPosition: n }),
                      (Q.current = new F.Jb(
                        (e.clientX / t) * 2 - 1,
                        (-e.clientY / A) * 2 + 1
                      )),
                      I.current.setFromCamera(Q.current, f.current);
                    const c = I.current.intersectObjects(p.current.children, !0);
                    if (c.length > 0) {
                      const e = ce(c[0].point);
                      console.log({ clickPosition: e });
                    }
                  };
                return () => {
                  e.removeEventListener('click', t);
                };
              }, []),
              Object(c.useEffect)(() => {
                let e, t, n, c, i;
                const { offsetTop: r } = m.current,
                  { innerHeight: s } = window,
                  a = () => {
                    const a = window.scrollY - r;
                    let o;
                    n && n.unsubscribe();
                    const l = e => {
                      let t;
                      return (
                        C.current.traverse(A => {
                          A.name === e && (t = A);
                        }),
                        t
                      );
                    };
                    requestAnimationFrame(() => {
                      var r;
                      const d = q.f.clamp(0, j.current.length - 1)(Math.floor(a / s)),
                        g = ie(j.current[d]) || Ae,
                        u = ie(j.current[d + 1]) || Ae,
                        h = (a - s * d) / s,
                        E = q.f.clamp(0, 1)(h),
                        b = ne(g.x, u.x, E),
                        m = ne(g.y, u.y, E),
                        w = ne(g.z, u.z, E);
                      var B;
                      o !== g &&
                        j.current.length &&
                        j.current[d] &&
                        ((r => {
                          const s = j.current[r].meshes;
                          C.current.traverse(r => {
                            var a, o, d, g;
                            const { name: u } = r,
                              h = s && s.includes(u),
                              E = A.includes(u),
                              j = l('Chunk'),
                              b = l('EarthFull'),
                              m = l('EarthPartial'),
                              w = l('Atmosphere');
                            i ||
                              (i = Object(q.g)(w.material.opacity, e => {
                                w.material.opacity = e;
                              }));
                            const B = () => {
                              t = Object(q.g)(j.position, ({ x: e, y: t, z: A }) => {
                                j.position.set(e, t, A);
                              });
                            };
                            t || B();
                            const p = {
                                from: null === (a = i) || void 0 === a ? void 0 : a.get(),
                                velocity:
                                  null === (o = i) || void 0 === o
                                    ? void 0
                                    : o.getVelocity(),
                                stiffness: 16,
                                damping: 32,
                              },
                              v = {
                                from: null === (d = t) || void 0 === d ? void 0 : d.get(),
                                velocity:
                                  null === (g = t) || void 0 === g
                                    ? void 0
                                    : g.getVelocity(),
                                stiffness: 32,
                                damping: 26,
                                mass: 1.8,
                                restSpeed: 0.001,
                              };
                            if (h)
                              if ('Atmosphere' === u)
                                (r.visible = !0),
                                  (c = Object(q.e)({ ...p, to: 1 }).start(i));
                              else if ('Chunk' === u) {
                                const A = new F.Kb(-0.4, 0.4, 0.4);
                                (r.visible = !0),
                                  (n = t.subscribe({ complete: B })),
                                  T
                                    ? j.position.set(...A.toArray())
                                    : (e = Object(q.e)({ ...v, to: A }).start(t));
                              } else
                                'EarthFull' === u && j.visible
                                  ? (r.visible = !1)
                                  : (r.visible = !0);
                            else
                              E &&
                                !h &&
                                ('Atmosphere' === u
                                  ? (c = Object(q.e)({ ...p, to: 0 }).start(i))
                                  : 'Chunk' === u
                                  ? ((n = t.subscribe({
                                      complete: () => {
                                        (j.visible = !1),
                                          (m.visible = !1),
                                          (b.visible = !0),
                                          B();
                                      },
                                    })),
                                    (e = Object(q.e)({
                                      ...v,
                                      to: new F.Kb(0, 0, 0),
                                    }).start(t)))
                                  : 'EarthPartial' !== u && (r.visible = !1));
                          });
                        })(d),
                        (e => {
                          const t = j.current[e].animations;
                          M.current.forEach((e, A) => {
                            t.find(e => e.includes(A.toString())) ||
                              x.current.clipAction(e).reset().stop();
                          }),
                            M.current.length &&
                              j.current[e].animations &&
                              t.forEach(e => {
                                const t = e.split(':'),
                                  A = M.current[Number(t[0])],
                                  n = x.current.clipAction(A);
                                (t[1] && 'loop' === t[1]) ||
                                  ((n.clampWhenFinished = !0), (n.loop = F.M)),
                                  n.play();
                              });
                        })(d),
                        (B = d),
                        U.current.forEach(e => {
                          e.hidden &&
                            (e.element.classList.add('earth__label--hidden'),
                            e.element.setAttribute('aria-hidden', !0));
                        }),
                        j.current[B].labels.forEach(e => {
                          U.current
                            .filter(t => t.text === e)
                            .forEach(e => {
                              e.element.classList.remove('earth__label--hidden'),
                                e.element.setAttribute('aria-hidden', !1);
                            });
                        })),
                        (o = g),
                        ((e, t) => {
                          const A = (e = 0) =>
                            Math.round(100 * (e + Number.EPSILON)) / 100;
                          return (
                            A(null === e || void 0 === e ? void 0 : e.x) ===
                              A(null === t || void 0 === t ? void 0 : t.x) &&
                            A(null === e || void 0 === e ? void 0 : e.y) ===
                              A(null === t || void 0 === t ? void 0 : t.y) &&
                            A(null === e || void 0 === e ? void 0 : e.z) ===
                              A(null === t || void 0 === t ? void 0 : t.z)
                          );
                        })(
                          null === (r = S.current) || void 0 === r ? void 0 : r.get(),
                          f.current.position
                        ) ||
                          (S.current = Object(q.g)(
                            f.current.position,
                            ({ x: e, y: t, z: A }) => f.current.position.set(e, t, A)
                          )),
                        T
                          ? f.current.position.set(b, m, w)
                          : (L.current = Object(q.e)({
                              from: S.current.get(),
                              to: { x: b, y: m, z: w },
                              velocity: S.current.getVelocity(),
                              stiffness: 80,
                              damping: 70,
                              mass: 2,
                              restSpeed: 0.001,
                            }).start(S.current));
                    });
                  };
                return (
                  l && R && (window.addEventListener('scroll', a), a()),
                  () => {
                    var t, A, n;
                    window.removeEventListener('scroll', a),
                      null === (t = e) || void 0 === t || t.stop(),
                      null === (A = c) || void 0 === A || A.stop(),
                      null === (n = L.current) || void 0 === n || n.stop();
                  }
                );
              }, [m, A, R, l, T]);
            const G = Object(c.useCallback)(e => {
                j.current = [...j.current, e];
              }, []),
              se = Object(c.useCallback)(e => {
                j.current = j.current.filter(t => t !== e);
              }, []);
            return Object(n.jsx)(re.Provider, {
              value: { registerSection: G, unregisterSection: se },
              children: Object(n.jsxs)('div', {
                className: g()('earth', s),
                ref: m,
                children: [
                  Object(n.jsxs)('div', {
                    className: 'earth__viewport',
                    children: [
                      Object(n.jsx)('canvas', {
                        className: g()('earth__canvas', {
                          'earth__canvas--visible': R && l,
                          'earth__canvas--grabbing': u,
                        }),
                        ref: B,
                      }),
                      Object(n.jsx)('div', {
                        className: 'earth__labels',
                        'aria-live': 'polite',
                        ref: w,
                      }),
                      Object(n.jsx)('div', { className: 'earth__vignette' }),
                    ],
                  }),
                  Object(n.jsx)('div', { className: 'earth__sections', children: a }),
                ],
              }),
            });
          }
        ),
        ae = Object(c.memo)(
          ({
            children: e,
            scrim: t,
            scrimReverse: A,
            className: i,
            camera: r = [0, 0, 0],
            animations: s = [],
            meshes: a = [],
            labels: o = [],
          }) => {
            const { registerSection: l, unregisterSection: d } = Object(c.useContext)(re),
              u = Object(c.useRef)(),
              h =
                JSON.stringify(s) +
                JSON.stringify(r) +
                JSON.stringify(o) +
                JSON.stringify(a);
            return (
              Object(c.useEffect)(() => {
                const e = {
                  camera: r,
                  animations: s,
                  meshes: a,
                  labels: o,
                  sectionRef: u,
                };
                return (
                  l(e),
                  () => {
                    d(e);
                  }
                );
              }, [h, l, d]),
              Object(n.jsx)('div', {
                className: g()('earth__section', i, {
                  'earth__section--scrim': t,
                  'earth__section--scrim-reverse': A,
                }),
                ref: u,
                children: e,
              })
            );
          }
        );
      var oe = se;
      A(99);
      const le = 'Designing the future of education',
        de =
          'I worked as the design lead on a major iteration of Smart Sparrow\u2019s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.',
        ge = [
          'Art Direction',
          'UX and UI Design',
          'Front End Development',
          'Motion Design',
        ];
      t.default = () => {
        const { themeId: e } = Object(o.c)(),
          { dispatch: t } = Object(r.a)(),
          A = Object(c.useRef)(),
          d = Object(c.useRef)();
        Object(r.k)();
        const g = 'dark' === e,
          u = ['dark', 'light'];
        return Object(n.jsxs)(c.Fragment, {
          children: [
            Object(n.jsxs)(a.b, {
              className: 'spr',
              children: [
                Object(n.jsxs)(i.a, {
                  children: [
                    Object(n.jsx)('title', { children: `Projects | ${le}` }),
                    Object(n.jsx)('meta', { name: 'description', content: de }),
                  ],
                }),
                Object(n.jsx)(a.a, {
                  opacity: g ? 0.5 : 0.8,
                  srcSet: `${B} 1080w, ${p} 2160w`,
                  placeholder:
                    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z',
                  entered: !w.a,
                }),
                Object(n.jsx)(a.c, {
                  title: le,
                  description: de,
                  url: 'https://www.smartsparrow.com/',
                  roles: ge,
                }),
                Object(n.jsx)(a.e, {
                  first: !0,
                  children: Object(n.jsx)(a.g, {
                    children: Object(n.jsx)(
                      a.d,
                      {
                        raised: !0,
                        srcSet: `${g ? O.a : v} 1280w, ${g ? Q.a : f} 2560w`,
                        placeholder: g
                          ? I.a
                          : 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3NDVERjQxMTBENDExRUI4NThEODkxREFDMENEOTU3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3NDVERjQwMTBENDExRUI4NThEODkxREFDMENEOTU3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJBRjczQjRFQzZFODU4MTIzQzhCNjlBRkY0NEJGRDI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0iQUY3M0I0RUM2RTg1ODEyM0M4QjY5QUZGNDRCRkQyN0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAUACADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDcd+RGWn6/6a3PkcHIaeeixVVJA8ZsVZIXK2t/re117dyXcpllNWJ6Lba1jsbfw4RRQOvnZfJr+an8pNs9lbqxuG3hmI6WjyVXHDHHUy6VRJnUAW4sAPaBXGqjdBS932W2udLYSvRTIv5xvy9aoanO9M0CDb/gXKOL29qGaPTjj0bWu5m7i1oenCL+bx8qVrYml3nm1kfSCfu5Bc8n+v8Aj7KJZmjJby6JNw3i+s42kr2Dr6Z/y2ikj6K3gsp1EYetubn/AJV3v9f9b2avQv8ALocyVSEk+nXy3vllnsDi+yd4rLJTtVPlcguhtJa4nk/H1/PtRLZJ4AlUivUN7zcTXF60aqdIPHoiWPMeSyclRFEqo1yCALW1X/JHsqCtUgHq9pvEe2RlZT0wblycNHXrHYmRXtZQL/7wfdXtnm7QK9Gk867rZExHtI6+xR8t/u/9BG8/uLav4LW/T63+2k/4n2setcdSZdV8A9fIu+cf8a/087y8fl+3/jVdptqt/wACX9rIa+H3109AdfodT+JTxOgLxf8AFv4bD4P87p5tq1W/xt7Lm0+MdPDoEXv0f1j+J8Ffy6k7a/hn95Kf+9Ov7fyjyf1tc/W/sW8t/u76ofX/ANn59LpvH/dp/d/GmOv/2Q==',
                        sizes: `(max-width: ${h.a.mobile}px) 100vw, (max-width: ${h.a.tablet}px) 800px, 1000px`,
                        alt:
                          'The aero lesson builder app dragging an audio component into a screen about plant cells.',
                      },
                      e
                    ),
                  }),
                }),
                Object(n.jsx)(a.e, {
                  children: Object(n.jsxs)(a.j, {
                    children: [
                      Object(n.jsx)(a.h, { children: 'The problem' }),
                      Object(n.jsx)(a.i, {
                        children:
                          'In 2017, Smart Sparrow began a project to build an entirely new platform to from the ground up to serve as the most powerful tool for educators to create online learning experiences. The old platform was built in Flash, and there were a number of user experience problems to solve in the process of moving the platform to Javascript. The primary goals for the project were reducing barriers to collaboration, and making the platform both easier for new users, but with plenty of room to scale for advanced users.',
                      }),
                    ],
                  }),
                }),
                Object(n.jsx)(a.e, {
                  light: g,
                  children: Object(n.jsxs)(a.g, {
                    children: [
                      Object(n.jsx)(
                        l.a,
                        {
                          srcSet: `${g ? C : x} 800w, ${g ? M : k} 1000w`,
                          placeholder: g
                            ? 'data:image/png;base64,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'
                            : 'data:image/png;base64,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',
                          alt: `A set of ${e} themed components for the aero design system`,
                          sizes: '100vw',
                        },
                        e
                      ),
                      Object(n.jsx)(a.j, {
                        children: Object(n.jsxs)(m, {
                          currentIndex: u.indexOf(e),
                          onChange: e => {
                            t({ type: 'setTheme', value: u[e] });
                          },
                          children: [
                            Object(n.jsx)(b, { children: 'Dark theme' }),
                            Object(n.jsx)(b, { children: 'Light theme' }),
                          ],
                        }),
                      }),
                      Object(n.jsxs)(a.j, {
                        children: [
                          Object(n.jsx)(a.h, { children: 'The aero design system' }),
                          Object(n.jsx)(a.i, {
                            children:
                              'To streamline the design process across designers and engineers for such a large project, it was important to lay the foundations with a strong, flexible design system that could evolve during the product\u2019s development cycle. This would inform both the aesthetics and user experience across the product itself as well as the website and marketing material.',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(n.jsx)(a.e, {
                  children: Object(n.jsxs)(a.g, {
                    children: [
                      Object(n.jsx)(
                        l.a,
                        {
                          raised: !0,
                          srcSet: `${g ? R : N} 1280w, ${g ? D : U} 2560w`,
                          placeholder: g
                            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAACl1BMVEUlLjslLzwjLDkjLDkkLToXJzYkLToiLDkYIjMVIzERIC8lLzwcJTIYIi8WIS86UmMaJTcnLzwYIzYmLz4fLz0RIzMfK0AiLDkqTV43SF0hMT4ZIzEzSWAmLjwaIzEiSV4dR1oWIDEVHi8UHy1FTWA9RFc+RFM8QE8fNEQnMj8jLzw0UWI+R1o5RlocN0cdJzsVJDMhSFoyN0IgKjYVITE4PEpCSVxJUGQnLT5BVWU6RVkqNEosM0coSlk6TWAkSFceJzUcO0svTGE8R10dQ1QdJzQlSl4dRVY9QlMbPk81OUYtMj1CSmA/RVc7SWApSWA6P04jMD0iKjYfKTQlLzs/TV4sS1olQ1IlMUglLj8dKTk6P1AvT2AuNUEgKT4/RVccQVIaJjMsSWA3SV80SV8uSV8dOUcgNEIoLjkjLDggKjcgNkYbM0MiKzgcJzQ3PEgWKzwcLDsZJzU/SVg8RFU8Q1MtNkEhLTsXKDkfKDVAUWFFUV87QU06PksxOkokOUkYM0gyOUUsNkQbMD8ZKjobKTgSKDgUJjYZJDNZZXkaP1hDSlc8R1YoQE8iPE0nPEw2PkszOkUmNUInMUIeMkEbLUAVLT4ZJTQcJjNba4JDYHo6XXlOYXgvVnJOXG9PWGokTGdNVGVEU2NHT1w/TVwyTVtBS1s5SVgzR1dCSFUnPlU2RVQpRVQuQ1Q/RVE8QlAtQFA+Q08bN0sgM0oZMEMXLkAkMT8bLTwgLDoaKjlRaYJQaIFXaYBHZYBbZHdFW3U0V3NXXnA3UmwnUGtIVGpJVmg/T2c8UWU2T2UvTGMeR2JKUGEzSGAoRmAnR186T14hQlpFTFkvSFc0QFcyQ1MbPFMsO1M6Q1IeOlImN0QjNEIaKT0cKTe2uTKVAAAAanRSTlP2/Pv3/v75/vv7+/n39/f9/Pv69/7+/fz7+/v7+fj49/f39/f2/v7+/v7+/f38/Pz8+vr6+vn48/P+/v7+/fz8/Pv6+vr6+fn5+fn5+Pj39/f39/Ty/v7+/v7+/fz8/Pv6+vf39/f39/fwtZRP7gAAAl1JREFUKM890HVb2lEUwPEr7oegYIyQXmF3d0/nbJ3r7k1wgqAwUBSEISOksZ25GdPZuu7urhezC+Px++/5POfe54DUVFBdff7c7p27tsK2wCorT51lnDldUVHGTklJAakEpg+NFp0HRVxcXFERhZKfz2AwqFRqQUEZm80GBIKPRzgtNDrvRE5OFoVyJCLCz88vO5saFRUVGZmcnAwIzACPcGIHN9qwfyZr3zgcp6WNSPZGpguFQUHHy8sBXLBJJOJ3cDkGvX7m8/gHiWREKp0QCJtgwcXFADjBmkq5auW0delv3rg+JpWOjn6aDJ6bCwkJqapyAa+6v6r1VWtoW1vXrWmdQKvVTs7Ot7S0tiYlJbnBpUZEaeNyIPg6rQuenYfDBmclJQAEuIAD4S21Lxim4Bu6phZjg8kkN8nl8fHxgAlBPdwgXl749vH9q5cvJGNCo7wZplA0Hy0tBcANeO1XXz8Z6OvtH3wmMCrCwlfM5l/msIALwBON8qq/7ALXBvru3b6rGZyQhYn4RCuH85uGrnGBOjd42Hunp0czJJCt8J2H4YQSExKAJyqwHgKHeOnnu8cP+jX3Hw3/UBCVymUul9vBL8S5QXcnYlucevv86dDwG4HMwheLeXa7nac6ydoADrFt8fuX9CDhYZlFtI6or8CQWDr+/yfrujs7G/+QD2RkZGZaDq4dUiFqtZpEImHxLAjQqMDcXDod4x9DJpOPxcT4w5DYWJK3NxbLwgEAmGhUQiGLjsFsdobBJCZisFisNywRj9sDamsB8KzB4fB4322w7TBfZztgcH7xHwtV2SAlYRwVAAAAAElFTkSuQmCC'
                            : 'data:image/png;base64,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',
                          alt:
                            'The homepage of the aero design system docs website linking to principles and components.',
                          sizes: '100vw',
                        },
                        e
                      ),
                      Object(n.jsxs)(a.j, {
                        children: [
                          Object(n.jsx)(a.h, { children: 'Design system docs' }),
                          Object(n.jsx)(a.i, {
                            children:
                              'A design system is useless if no one knows how to use it, so we put together a comprehensive documentation website to cover principles, ux, accessibility, and component guidelines for designers and engineers working with the system.',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(n.jsx)(o.b, {
                  themeId: 'dark',
                  children: Object(n.jsx)(a.e, {
                    ref: A,
                    backgroundOverlayOpacity: 0.5,
                    backgroundElement: Object(n.jsx)(l.a, {
                      srcSet: `${H} 1280w, ${L} 2560w`,
                      placeholder:
                        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcxMEYzODRCMTBGNDExRUI5MTM1RDgzODVFNkUwREU1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcxMEYzODRBMTBGNDExRUI5MTM1RDgzODVFNkUwREU1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0REQxMEQwMTlBREE5MURFNUJFNTJBOEE1NUQzODU0RiIgc3RSZWY6ZG9jdW1lbnRJRD0iNEREMTBEMDE5QURBOTFERTVCRTUyQThBNTVEMzg1NEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAtAEADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDSIyNWahiSb39n8khboljTT0ziMk3/AN9/t/afPSivTtQhldf6X9ux8em3pToWtv1DIFsf6D2uQEjpC5FehQx87uyWJPI9viMnpouB0Oe08q9LGoJIFvyfaO9gZ4z0ebRcKkoJ4dNXYFeK2lkANyVP59giWzZZtR4V6kn61JLbSDmnRLdw0MpqpWCn9R/3v2eWw0qB0B9wUlyfLpDmldjyPr7MtJr0R6h1LjoGt9P6e7iM9UaUdOlJQNrHpP49upFnpl5cdCJhqRlC8f09mcMWOkMsvQo4anuyXH9PaxIx59JGl6FOiTxwgr9bfj/W96lhBXpRbXDIwI6T2XElQWQ3INx/vh7Cu4wBKsB0OtqummohPQd5HbAnu5S9/wDD+vPsiiuQr6T0IbjazLFrA6BumxHkYen/AHj2MVi6jBpadKan22zgWS/t5YekzzdO8G2WQg6D+Pxz7eSHplpq9KWjxRhA9Nv9h7WImnpKz16VWPj8bLx7eFOmzXpd0kt0C+/McdOR1Br1kkovK2q3+Psg3GPUh6F+yylZB1ilxwKEafx/T3Hl4DFKSOpn2xUuIAp9Oi+UdGkTDUPz7k5aDrHsgnpc437YABtPP+t7UKw6TOjHPSnSKlcC2n/ePdwy9MFD59cjRxkem3Puwcde8PrlHRFSLf7173rHWxH0oqKnbjj3Uv04iUPSijhsouPaC67lI6O9vk8NwescgUfj/ff7H2Db6xaQkjqUNp3hYUAJ6KXJlFAuCP8Ain+39igzDqLBD1gXcDxMLOR/sfdPqOreAD0+0W6m4u/+8+7i5PTTWw6WFBuRJLXb6/4+3VuPn00bf9vS0ocjDNbkf7x7dE9emzDTpY0UkTAWI9+8Xr3hnp2aRAv1H+w9ts4I6eSqnHHptldWPB9pnRW49GMV1IgweiPt5rc+0Z1dXGnpuk8t/wDY/wC++vts18+r46lU/muPr/vPu3d1U6elPQfdXXTf8fk/8U9uDX002noQsV/EfTYC3H9pv949Pt5dfTLaOhOxX3+ldQH4+jH/AHi6/wC9e7jV02dPl0oW+608gfj8n/invfd1oU6wDz35/wB7Nv8Aevp7bOrp4U6//9k=',
                      alt: 'A dramatic ocean scene with lava forming a new land mass.',
                      sizes: '100vw',
                    }),
                    children: Object(n.jsxs)(a.f, {
                      width: 'full',
                      children: [
                        Object(n.jsx)(a.g, {
                          width: 'full',
                          children: Object(n.jsxs)(a.j, {
                            width: 's',
                            children: [
                              Object(n.jsx)(a.h, { children: 'Motion design' }),
                              Object(n.jsx)(a.i, {
                                children:
                                  'Animation was a core principle in making the authoring experience a more understandable process. Elements animate in ways that indicate the cause and effect of each interaction to improve the fluidity of the overall experience.',
                              }),
                            ],
                          }),
                        }),
                        Object(n.jsx)(l.a, {
                          raised: !0,
                          srcSet: `${Z} 1280w, ${G} 2560w`,
                          className: 'spr__video',
                          src: G,
                          placeholder:
                            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAUACADAREAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAABAUGAQcJ/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwUBBAYCAP/aAAwDAQACEAMQAAAA5g6JXYZPaa7bIz7iw8vkipxO215vYnFgU8PrMw2YrP/EACIQAAICAgICAgMAAAAAAAAAAAECAwUABAYRIVESExQxQf/aAAgBAQABPwCPY2b2D7piSW/fecY4hVGgeTZmQS5zCy16a0KazBwD/MquaI+l8HTKeaJ6gkessrCRvmizMB67w1bPtF3YtkahfAyKdoKvpT14yTckadvOfkP7zgmlHZXiRygspOf/xAAfEQACAwEAAQUAAAAAAAAAAAAAAgEDEQQSBSEiQVH/2gAIAQIBAT8AvvltaTo7bZsxDmtfx+RW/wBjxsYTxx5aRX7YImEn6KenUq9mMf/EAB4RAAEEAgMBAAAAAAAAAAAAAAIAAQMEERIFECIx/9oACAEDAQE/AK1dh8iqtCEYdj+q1EG2BUseFEWr5TX301dFN6ypZNkyz1yUpBG7iv/Z',
                          alt:
                            'A learning designer building and deploying an interactive lesson on volcanism using the app.',
                          sizes: `(max-width: ${h.a.mobile}px) 100vw, 50vw`,
                        }),
                      ],
                    }),
                  }),
                }),
                Object(n.jsx)(a.e, {
                  children: Object(n.jsxs)(a.g, {
                    children: [
                      Object(n.jsxs)(a.j, {
                        children: [
                          Object(n.jsx)(a.h, { children: 'Encouraging adaptivity' }),
                          Object(n.jsx)(a.i, {
                            children:
                              'A major part of solving for collaboration was being able to visualize the learner experience in the editor. This was especially beneficial for subject matter experts and instructors need to review and give feedback on the higher level structure without having to dig through all of the adaptivity scenarios screen by screen.',
                          }),
                        ],
                      }),
                      Object(n.jsx)(
                        l.a,
                        {
                          raised: !0,
                          srcSet: `${g ? S : y} 1280w, ${g ? P : J} 2560w`,
                          placeholder: g
                            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABp1BMVEUYIS0eJzMcJTAaIy8hKjYfKTUxOUMmLjkiKzczPEgnMDsdJjI8Q0wkLDhiaHFOVV0vN0ItNkIjLDh5foZESkozO0YqNkU3PkInMT4fLDp9golzeYBxd31GTVdASFE2P0suOUcrMz4lLTklLDUhKjSIjJGPkpB/hIx9gYV8gYJ3e4GGiHtmbHJfZnBOV2FKUVxFTFZES1VQVlJNUlE3PkcxOUUtNT4wNzwqMjsnLzcjKzMfJzGipZ2GiomSlIh2fIVtdoBwdXtpb3dnbXVVY3JhZm1YXmZna2NUWmFBT19dYVw6SFcxOkcqNkQvNj8lMD0qMTianZePlJaLkJaCiI+TlY15g42YmoqLjomCh4lueYZyeoSDhoB7f39ncHt2eXhrcXiChXdia3Vzd3R9gXNscXJaY2xtcWtpbWlvc2ZVXGVSV1snQVpWXFlIUFlKUFcwPEo/RUY7QUYiM0U1PD8zOz4qMT0iLjyhpJiWmJGIi356fXd5fHBzd2teY2srTGtNW2pjZ15bX15gZF1HTVM1RFMqPE86Qk4lOk5KUE1CSE0gMEAyOT5Z62yvAAACBUlEQVQoz1WOZXfiUBRFHwkhBoEECKS4uxdvgeIOU/dO3d3G3Wd+9Ly0i7Xa8+mst/e794KPJz94Pc4R0mchOOouJUta+R44+XU9sEsxTPI0GIYR+J0q2bXy4PqvIED+XKBpGiMoVkuSViAIBIfjuF3BKcRwdtgJqGPEgCUtli6As2wyktTKVLKHaGFX6e8F4V7PdkktCwhKJTcplZGYORY1maLRiNh/Xlh5nu+xrI0CkDeDU8aXtQ+1GsOEQmXYQ+FWq9P5ftHT26XANn4eXHJPu/xTRoPfbzB4XK7Z4la1Wv3U6lgHUhqo5Mcb7omJF5M+r3dsTK2enZme8ZRKy8vrexGLHkNAX368PfdKFERuMKo9nrFiaWV+fmUrDAUU9K/i+28WFgqraz6v2lhmgpVKkAmtF9UGJmyhJChI6TTt9zubm2/XJl1L/vJe/agZVirrTIU5iiZxGgUZaMTbXxsHG4tut2+3rjyLmeVys+nMZCYpeALA8cw/3aUm8WV78fXc6m7z3Cwfl7GqpFaWopwICgBHOB3ZYfoqcRAoFAL7p98gt+EKBXyXiBxgEhpB8o60pv0uENhpxP9ATkklCIKgEMPQoobms7rE58PDxqlG18/ghPh3lMeKOoc6TSL++/I2kx3NHgnIg4Dkhumbm9t0NgdXjvhoxaORzzkcjlwern6KwX+M/FwerB/Y+wAAAABJRU5ErkJggg=='
                            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABEVBMVEXz9PT19fby8vLy8vTx8vT29/jw8fPv8PHz9Pbx8/Xt7/H19e309PHt7u/q7O3s7e7l5uj19fTo6+708+vi4uP189/6+vr4+Pnr7/P19fLx8fH29vD19OXh4eDu8fXq6uzo6evm6Orr6ujn5+jx8Obt7Obk5OXg4uXn5uLn7fPq7fDm6/Dm6ezv7uXy8OHy8N3e3d3V2Nv5+fb09PP29evl5+rd4+n29efi5Of08uP39/bq8PXi7PPh6fDu7u7c5u7v7+zx8Ovg5uvu7erz8ujY4ejm5uXd4eTW3ePq6eHf3t3Z6fXC3fT4+PPo7PDx8e3f5+3q6OXd3uDt7N/Y3N/Q1tva2tjIzdCl0fTT5fPa3uJN/EehAAAB4ElEQVQoz12Q53LiQAyAZXuzaxtcsM0FTHEvdAi9EwgtvV7u7v0f5NYwmcnk+7Mr6dNII/hzfzflmYsfMKBEnc/Pj70G939nOYzYnxBZfe103kca3M2mZcRxLMcixCL6cAkIi1Y/ika2AtNyGSd5FmGCMTqXEcZiVXP6jiUBL9CI9ppEUiSRIA6AZsq5XKWqabIiAQMsISYdqtieLUuY43lBKOcqlVqtpsmyQgVzsSCmuXDDkqHKhAo8rc/my+d5rSqJkGFXbrBZrdzd7e+24SmE43CuMl8ut9t1vSqKMEk/NRq+7wcxFUqqLBFMco/Pg+3hMKhXMYZJXvebzbEfvJRu6QzbUhT5sbYeHD46e0fCCK4KerPVajUbwUsYhqoXqqrq1NeDf533yBYRFR56xWw2O7653rjuzgsNw4jUer0/2kd9mQgC/Loq9IrF4lDXrzdBHBvtdvt15Gia5diyiE7CQyGlpyi63zge41KpZHiyJIrJ1QSgwuUkk88X0gX9Ztx8ezvG8c6zJHpRxAnA80CFCyaTKDpdpdVqBK6liPSezImzcMEwmW7ha9cn0+QAmDPAfQmZfKo3HBaHqXQaAGj/dyH5QDedSsjTeoZhqHJagENwSQWgUCOhC98QBET+A7EgPbhEF+2BAAAAAElFTkSuQmCC',
                          alt:
                            'A drag and drop storyboard style editor for creating an adaptive lesson.',
                          sizes: `(max-width: ${h.a.mobile}px) 100vw, 80vw`,
                        },
                        e
                      ),
                    ],
                  }),
                }),
                Object(n.jsx)(a.e, {
                  children: Object(n.jsxs)(a.f, {
                    children: [
                      Object(n.jsx)(a.g, {
                        children: Object(n.jsxs)(a.j, {
                          children: [
                            Object(n.jsx)(a.h, {
                              children:
                                'An extensible plugin ecosystem usable by everyone',
                            }),
                            Object(n.jsx)(a.i, {
                              children:
                                'The most powerful aspect of the platform is the ability to create custom plugins for any content, whether it be a degree, course, lesson, screen, or interactive component. Out of the box these can be made configurable with minimal effort from developers. Learning designers can then edit everything using a common configuration interface.',
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsxs)('div', {
                        className: 'spr__sidebar-images',
                        children: [
                          Object(n.jsx)(l.a, {
                            className: 'spr__sidebar-image',
                            srcSet: `${
                              g
                                ? 'data:image/png;base64,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'
                                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAKUCAMAAADVWLbmAAACrFBMVEX////8/Py6urrg4OC3t7eZmZmjo6P7+/v9/f3s7Oz5+fnu7u7z8/OgoKDT09OLi4taWlpMTExQUFCQkJDJycno6OjX19d0dHRRUVGGhobp6emcnJxSUlLc3Ny4uLhmZmZOTk5cXFyampqhoaFgYGDx8fGNjY3q6upVVVV2dnZTU1OqqqrKysp6enr+/v5ZWVlnZ2dxcXF7e3va2tpsbGy7u7t+fn5lZWVvb2+VlZXm5uaYmJiUlJSwsLDS0tLW1tampqbU1NRXV1eysrL29vb19fXe3t7w8PB9fX1bW1vMzMyoqKh/f3+bm5thYWFYWFjb29tfX1+ioqLExMSkpKSEhISFhYWsrKyrq6tPT0+CgoKvr691dXV3d3exsbHZ2dn4+PjHx8eurq5qamqlpaWHh4eBgYHY2Ni2trbPz89UVFT39/fv7++enp5eXl65ubmnp6fn5+fNzc29vb14eHiJiYljY2Nzc3NNTU28vLydnZ36+vqWlpZdXV3l5eXLy8tpaWnt7e3Ozs7k5OTQ0NBoaGizs7N5eXn09PRWVlaAgIC1tbViYmLBwcGTk5Pj4+PGxsbDw8OOjo7CwsKMjIyKioqSkpKfn5+IiIjr6+tycnJ8fHy+vr5wcHBtbW3f39/y8vJra2vFxcWDg4Ph4eFkZGSPj4+tra3R0dHV1dXAwMBubm7i4uKXl5fZ2d60tLSpqamRkZHd3d37+/zn5+rd3eLc3OHu7vC/v7/IyMi42fU2nvEhlvMglfIglPEglPAgk+8gku0fkesciN7L4PDr6+zFxcrS0tfT09jV1drW1tvX19zY2N3e3uL19fYgk+4gkewej+kbgdPz9/r5+fq9vcHQ0NXT09fU1Nkej+gafsy2trrPz9QdjeYZe8jK3Ovn5+izs7jNzdJHcEyanK7dAAAA5HRSTlP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCKi/9yAAAXJUlEQVR4Aezch1sTadv38V9AMJAIXFQFZYCVFtYgiCDsKpHNGHapCwoWxEhRMeCCUlyDAWTBWFBUdG3c6lpXsd69997e96n308tf8sxMLkgoSlmQsJyfrV5MmMz3yIQwOY9gLhFCCCGEEEIIIYQQQgghKg9ParDEy3spxlL7+I5f06jxGr7ahd5gmQ/G8PMPYIFBUppgpggBEBq2nAWuCAcimEMEsJKtgiRSiGLRMb5Qtn8HwGoWC2DcpqHMYTUQx5ZB4tyD2zWIT2CJ/jqWJN/FqGhJPPBuFBPWRLFEPbyTk6UcycnewxFiGFubEsVSHYeUoHVGGLPpuuTkBMaSk9NcI/A9uFsDrGdhwBKWLt/FDDhsYJl6ZEUxT0jeY+8D4BHiA9lGYFMUy1YiMIMzwthNgc0sB4BrBL4Hd2uAD5hghOjn43IXt7BAE4DcDz8ad2R5LA2SfFYgb1/IiozuH2HyBihm7OOSLY67+OH69etLgVK2FsCERxbHCiDZyrbJ25els/LpReB7mC8eXgU+mMj2HYyxneLw01YhsItVvC7CbrYdkkoWpkTYwz40TysC38N88Szw2osJxVdVMPneB7OciIiIPMCDVb8uwk7H8dSwWiUC9rHK6UTge3C7CvsPaOSDElzO2Dp20ALgwIH6cUf2HssF5BYNjgjF7NCH7v+cMGmFXJYHfMI2uNxFsYg1Ak07dmjGHVkdY4eVnw6rHBGwjTH3jzBphSOMNbfkMIPyU7xVUgpUMZaSGsVaJjiy3SwqpU3+Eo+wZUoRcqTv2+zcg/tVSEpgR9uS1COv5zwAfFrImO6YdYIjM7fnMHa8UTUcASumEkHW6roHt6ugCo/FOGK8Hq+h0WLB4hV2LcWiZ/OFGyKEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgixGvEG6jevW0W8VR0dmLaWFjNQF4RRrOFw5d2JiWlNgKHI8rp1fbgVKE/G29QV4zX9Crooeab/EEbxSptahEN5wIkG9evWs1n3W4+AVTOooAs62KVE+KAwuX0pPuvR5WorcwKFXqxLObi7CfplRc0nlQg1AUU1w5vZ4wLC9iI9KlnI+iQF6M04dboLZ3Z6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'
                            } 260w, ${g ? T : z} 520w`,
                            placeholder: g
                              ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDU5QUMxNzkxMEVDMTFFQjk0Mzk4MkM3MkFCREJDM0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDU5QUMxN0ExMEVDMTFFQjk0Mzk4MkM3MkFCREJDM0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENTlBQzE3NzEwRUMxMUVCOTQzOTgyQzcyQUJEQkMzRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENTlBQzE3ODEwRUMxMUVCOTQzOTgyQzcyQUJEQkMzRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgydnl8AAAGkSURBVHjaxFNLckMxCANC79JtD9D7XyqGSnxe0k6m011xxnm2ZRAI6/vH5+12e3NXmJlk3u+nRyRHCs1NDTj3N8OXWSYPcB4WclSkYeLYjwhc11BTBeqcg51sR4t0zISewFaoSn3nwgDEHnGckoEwqyjvYMiFkr4AfrTeT4ZtDPaSUVPGH8kjTcnmEsVJd1lz47QPtC6qIaoFcroiVHBxZNbeTZsqK8MSZHNOklbki63JSgnC6aERu5XBqbPgGYwbVn4AuxNXB8UN/IFjSZlyasU6wcHPdkd2keZVUNI4LHi5q6CtLDkbCXqn3WXLXBmmzA9zHXGmWmUmLGhqJ2GUwvsPUzmrKoJrjP5cUAWlbmyskiSqCY6eVL26oJoN+rL58CMBZgExjrKm2a6JQ+rUjS67G9gvYmlXKt1VyNDrwq0iW0mzWuW3nH3lLETVUif9Xk6xrFDZjR7xw4ssLn01nXvTKwvPLT376sgBwGKj1N8F6gc0721bchNt3APbOCwReF7Wk7ZPvn1I1cPSFw0w6MLt63sBWqRf7n83k7/Zf+G+BBgAIoytDmpGAwwAAAAASUVORK5CYII='
                              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABAElEQVR4AYyTgYrEMAhEVfPf/e7e0cxlHTqIALePrEgyGjVb33sDeJ7nOFa4exReWBHndxS/xX3fP8XxT6QJ6gAoE5Mpn06XIrgbRWYea40FYBeMO7aXpatCEdIRE9IJ5mbvIyBGfQRgevkWACRqlUH77seOfgtOtAaU2l869oIi6mh5FMqh2QozvMsCxfsM6YX8OZd271lBt7O6CB7bDbHhvj8GKjpap4oIzWbmY5vmdWt4RkkboRd76sn8LIO/4GVpZpqOb99mEvEPtvo/gI6syMyQjlI5RAGBwv4jvPhW1z+LjrLkdV2cbjaG9GNHp6MMfVaj04n2Dd/xt+GiDgBUWvviH6BKngAAAABJRU5ErkJggg==',
                            alt: 'Configuration options for a component.',
                            sizes: `(max-width: ${h.a.mobile}px) 50vw, 25vw`,
                          }),
                          Object(n.jsx)(l.a, {
                            className: 'spr__sidebar-image',
                            srcSet: `${
                              g
                                ? 'data:image/png;base64,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'
                                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAKUCAMAAADVWLbmAAACW1BMVEX////8/Py5ubng4OC3t7eZmZmjo6P7+/ugoKDr6+tfX19MTEzY2NjJycno6OiXl5dsbGz9/f2bm5uGhobW1tZgYGBZWVlVVVXa2tpOTk5cXFzq6urx8fFXV1e8vLzn5+dQUFDPz89lZWWurq5hYWH5+fmIiIjU1NT6+vpjY2OJiYn19fVaWlq7u7vDw8NYWFjHx8ecnJyoqKjGxsb4+Phvb29xcXH29vaSkpLl5eVNTU3Z2dl/f3+vr6/7+/zn5+rd3eLZ2d7c3OHu7vDm5ub39/iDg4Pd3d3i4uKmpqasrKyWlpaLi4v+/v6zs7Pz8/N1dXW+vr59fX1TU1NpaWnOzs6enp5mZmbT09NUVFSRkZGlpaXw8PBqamrR0dGNjY2ioqKCgoKxsbFSUlK1tbV2dnZra2t5eXmVlZVoaGjLy8uEhIT09PR8fHxeXl7BwcFdXV2UlJSqqqrj4+Pk5OTNzc2wsLCQkJDAwMBRUVHc3NxPT090dHSPj494eHi/v797e3vQ0NCysrLf39/t7e2BgYHy8vK4uLjIyMjv7++rq6ve3t6hoaFzc3PFxcXV1dXt7e/h4eXa2t/39/nd3eEhlvP8/P36/f70+f2w1O9hqd82ktZqruHU6PejzexIm9mNwehAl9i/3PPN5PVxsuIujdX9/v9bpt7+//8+ltgXgNBEmdnX6vedyusmiNMPfM5Uotzt9vzi8Pqs0u47lNeCu+bQ5vb3+/4JeM13teTd7fkehNFOn9uVxellq+CKv+fv9/yo0O3o8/vI4fQAc8vx+P2HvueTxOlHcEzWQgMEAAAAyXRSTlP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBE0N+dAAAWbElEQVR4AezUg5kDUBAA4Y2xsW07Z/ffVWx+OL6bv4RZCAAAAAAAAAAAX8litdHA7nC6aOD2yD6vLvnErwsBCWooLBLRqMR0KW52AwklEqrJRCIlfk1nZrKSy2tBiqVSUVKJRFI1kQiZ2mAro2WZ8WtFlqpaqzfULXNNzZt8C+cjtNra0Ux3G8H8BtsIvX6/P5CZgapaxbwIVkfEI1cizNVkrqZDi4ERbBHH6FqE/Hg8vpGZW0M3YVvh+k+4q+m9JnLbCEZXOBPBqQ+PNX3aRjC/wjZCuj0zkOfSy6v4VWPbCMZX2EZYsMrbYgmiGrKYFmFb4d+zRd5dVHiuy+8GAAAAAAAAAAAAAPiYsncmbklscR//IhcNTy7kirmLXRDTC+5Kb1lhQiBepqBFIRFcwKTM0q7ra7Tv9W5/7jtjQ2rTIzLSHaHf596aZ+CZ3xk/T0fmnPN9DhcvDZ8ALl38DwUdXL6iwglAdeWychYuXsEJ4cpFKMUlFU4IqktQimFIyKVbIQkkgSSQhKutkKCD0fzLWi6wKyKhbYTnGg5gLIbAqKHyDH7E0Wl3VqZu+brLDUA7MoYf8Iyr8XNURuBvryISOK/D4WjAATSlELDc0EHCTZ/uKBL8VbcAOG/fwQ/03Z3Az5kMKCehBTzmYHvhPR2mfN46lzlU1+gfAy5UTfvr4TOVhsG/Eam6EzLNBJDXC2dlg78JmL1wmITgHIAe1x2gfsbkgGq8Y/7PaL5m0jhvjv2JhRunoR3H6P3F2ARgne+Nw9Vo6sXfEcuD+6P7r/l3JDxsampCsPKCk9WjtM65xLoeTRmKloHR2ZmihsdVRUu3jShtf7LCIvXzMd6A8L//OgbY0GESou0qLDeH7uBW++OmugEVG8+rXW3s/8vIPJZTiD61ov6c0WBVz1rxz3xxVwUaTHmj+Jtrueb17b8GRyOqEYnKksAY06vWLMB6DKUaoPBesjsEZ4HuAWhZufDGKAvglEmUkG9AyITDJKjXo3Dk8xI2NMDImIpNAKubAC+hqRenrtuwkRctdGMrArcH4IpxQ+gO20De5v5rkJ6FKGRJsC4sLJxlq0DZ+q6Eed9+Cfb+B43sP4U3GngJjgpRgpqNek8dLmEniPlHvITZRm562qJitcDq7K4EY5UnMlCjM2jDeo6bNgHhtpnB5e8S4uP7r0nPQvQYvxM8zAnMTEEqwVIx9EwqAZh3NF47XEKirrwHvITnu7L2S8DzVRM2O0pRb4LArU0z6vZJiOy/Ji0LURxDAm6sa2/pQ0kJzsoXWlHCthcB1iSVkF/lx+ESMDvpFCQszfQh2HRAwlhpG/JnfBhg1Yhr0H8GCe4RxjvgFiXsXZMO0SiOJaHcoNe7WpMSlhfZuighb7Bu21RTIJGgZvmpJLxkWkHCwjZniukOSLjKxvCYBQDrWvMNNV7d3i6J2RBub47uStjcu+ZffmJ83Yo93Ak3RPo8UHkgYYCpj9xyrRmADoBbhx8wJsDTbQfsgLlWcs1JfoK/6uzd/u0HUMtBTYJGkSIkgSSQBJJAU+60+ELLcLQgSxAEQRAEQRAEQRAEzSfQzBLNMdJsM607kASSQBJIghx0SNLX+ktathtPmoRTVqB6JAqM+fCNSRdESi0Q8EzIaFkTi22EVfgZUy9PmoTrJuDu4AYQ6cc33mxhF61RlLBoldHyjZaml5vnsA+38cRKqGcezJYZgKqXqO69HWlA2V103+nsbKtYLh0R4t5efaX/avoSAkC8FPYSQ08AiHonrWXWeD/QMSdImGhbjI0mA9zKSxhgAePTalZczN6aa9o6mm3onYOjavWlfkuMewc6XUV9ciQ82vShxKt2lKK7Lv72/l28nALyngsS3pUk+i1IJ8D9awPenS23ajBz/i9O1cUa+nycIMEWA3p8YtxbZndYm2b9KnDlsDcmunqBuHefhNZuFPUirQD3Lw1421yOMswFHRG0MAEdL8HSHn+pXxXzrTIldNXOuVDLOD6pXV49rV4oe4K87xIS+d7C0nSzy78w4O2Ynw1h1RCz4CWr7TZ3g5eQ4BorLe7jSQgIeeVuVv3N9HTnHQ/ybEkJJU5dk3wJmQ94Px58+g/Osqo4BpjT7rMJEjSRBg+QlNDjsk/IkQCNCz0+90SvXW1QqQCcNhntbbsSqsqRJ19C5gPeHlalAgysAQhxbP60IGGMMbbYkpQQnmYXZElI3B4tryk0jMFu4kybIei8dYbgroSV9rJ782FRwgl7YtRNYJcRi7o8yKkgYvek37IOPDo33Gd1wJZXuxytGgDMEKl1o1UH3Ul+gm+P/BHuGc9cyxfWTw9sVdqzaxijPhNrcy5kruWC0MrUmQYaRdJQmiSQBAp4U8CbAt4U8KYFWYIgCIIgCIIgCIIgaD6BZpZojpFmm2ndgSSQBJJAEnS/tYTRYM/sFt5yXRluORwH7Jb3/YkskKCtvLPqrPqQ0Kgz2nLAZcpHX+TNW82FLJAQYHFgokDrP53v50lgx1B5vSADLc/dxZYrS7pDq39w6oMKxSxQXl+/XmiPsrEQy8uMhHc+x3a4GylRPuBdaylkk695CUC5vglt4319/pXMSNBwvvr5N0iJ8gFvwN3RaBEk2Js1wHvGU5YZCfc0wMsIUqF8wHvMAiDSJkjon2wF7tu6u83GzEgYWwE6UktQPuAdXrupelbn5CUUDXYVF7cucW9fl57PjIRHi3YEW5AK5QPeqhU9028U8BLaGE+gLza45jVmRgKs/tK2bHhOALrPtmI/dnNGWtaBx2imscMRIAkkgSSQBJJAAW8KeFPAmwLeFPAmCIIgCIIgCIIgCILmE2hmieYYabaZ1h1IAkkgCRTwNpp/+r5uQZV7EtpegcfRaccPWCuwx14AfICVi/t6pw54A1oXj+rES+BawHPTpztUQjIAXlCclLBoTRnw5vnY29XV5c4SCXm9CE9pat6X43vC21pj2TvnA+BQj3P++94BZrlR+ATivt6HR/iAD3NwA1kiwVkJK1s5b3AhmfA+eC4kXicj0RXOM8B66qe4AnFf71QSwrPvF63ZJOEBcKZ5L+F94JyXYGdxXGVDA+wjytlbsTukkjCkaQg0RrNLQr5pL+F94JyXAMNsNMgtCBKeseqjSBDZdmSdhGTC++C5ICHMDfqLkJ6E10YgUn/yJViuXbtm3pOQTHgfPOcluBet2m4kJUj39ZZKuNUEWwij056TL4HxRPckJBPeB895CdhkjPUMiRKk+3pLJUzN4q3fsObIxodXu/mn59qaprc3m117L3tSBbyNrQC09lx6gg+wkvql6dBvPoD6sDKy0kGjSBpKkwSSQBJoyp0WX2gZjhZkCYIgCIIgCIIgCCJLoIC3OA0gFvpNA97ihJBY6LcNeF+5mCz0Gwe8VZeShX7ngPdwhguRhGNDEkgCSdAt6JIH3fFajkYzJEF+oSPSNjKy8lKHPZ4xtXgQU93yWpbsmap9OH79hSwJ7lX5hY4GN7WkuR38qYQftvVeqE2jZcnuufbSe+WW97IkiBakhTInIQSUtKO4rN02BDxuNm0wtXjgU93F/gtCnBt5Js42H0qn5ahmNRTad/N5m4CuakCWBLilhTIuYbsXdzb/vO+Cuc7bcY6pxUMxC4hxbvWg79XMCNKQwDtw7+zsu/k3QQCmcnkSIC2UWQnj/e9ZHIkEniyiiDVgiKnFAy9BjHOf1xuxZEhDguAAOzv7bt7xEMB82hJ2REIaaaEMSvDbHgaAf2br9JUYG3QLP7144CWI+dUh9q5oMpaOhLgbggTegnjvLUEAi2+PL0EslPHuwGNou7pUiTymFX568bAnAbPcU+/ZdD+XBAlw4xsd40Bro/n43SFZKPMSPCxPV1KHanbP7GBq8bAn4eNg9YQKsiQkSVQNoGMd8n8xSgtlWgKe6zuDgw/RzwbPMbV42JMw2skYN1VwHAnYaY9MVsv/iJRdKB1eG2E2Ap4+AOJhj/rS0eo89upYElCQAORJEB3IK5QxSupa6oPcgHwJyj82Hx/zG1fM8oxGkSIkgSSQBJJAU+60+ELLcLQgSxAEQRD0EUkPS/TYTAMoGkqTBJJAEkjC8cmpxRcFJMjPLIlhB2mhbJMgP7MkdSAWykYJ8jNLogNpoSyS4JafWZI6kFNIAaRxHfmZJTEIGNoRkVdIAaTBLWnUSL4EOYUUQBrhk0aN5HcHOYUUQBrmlJ9ZklqQU0gBpLHeY2eWRAtyCymANOB9/MxSVBOHgpml3I760wCKJJAEkkASaMqdFl9oGY4WZAmCIAiCIAiCIAiCyAI+ff4yrDhfPn+Cglz+/DVzc6HyL/g6/F9QjE/DgMISRBT8t/DZflIkfP0MpfiCkyIBX6AUw8pLOGkrUP8t4dD71Eg4tHyt5kdqSUJGJFB36OuG7jeWsDIyAaB3DpMuHA3PhIzucMT71HzniBdEM9Ed3rL2sW8S3mxBoKAYKVi05pqE/E3L+jcJZXehHuf8973iVpTFfqep/Y9gZawWHledKQ7xda++0n81t7qD/49qVrwrQegRkegK5xG3ohxg6/UzTDM2GMeG6a+ypxPi64FOV1FfTkl41vgC/iVRgp3FcZUNiVtRCgdHO2Dy6Rpb+oZYVHwdi9Yc+4jMX2tuvj0jSoBhNhrkFsS994SDsx2YtJxlAnHx9dyTMG9bWrrO1KKEMDfoL4JEgoe97O4266QScqM7PGPlgLHq1DcJ7kWrthtSCejZXLhVl0hK6HHZJ3JJQv4DNwCXwb0rAZuMsZ4hqYTqZtb5BkkJ4Wl2IVc+IqVoa5re3mx2AVImdNjD7kHuSgiwkvql6dBvPpT+sDKy0kHzCTSUJgk0n0ATrTTlnulFuJMiYfgTFOPysP0kSLB/vowktCBLEARBEARBEARBEAQFvCngPQxQwHsYoID3MEAB72GAAt7DWbvFEEn47wOkvE/NAVJW1xzgX5NAEnS5KqFtJDYXWkAq3MVGYNKVroQ9E2l0Ww1PGtVT55tSwk0577YVNiEF5WwZeLOVqxJaAFg4N3YMldcLUL1e57oKjDVX2RIIr9xt93St1/TblyuYwSYkwM3B9sJ7Okz5vHUuc25J2GKJKBsLsTx7u+1DzwqKWH/c8BzWNdPcRE1+U9VfZicLB9A7h2DlBSerR2mdc4l1KS9BinwJr1hx23hfn3+lg2nR1I9zFcCTQaO10gj3qArrmt3uwEtQrVmA9RhKNUDhvdySMLame894ylr0EOiNAXGmtT4A8HKeG5xLSjjLVoGy9V0J8z6FJWgkHEeCu8eL+zY+wm18yRbwYsi93QM4mFGQMMTytO+/S/AwJzAzlXMSTi1HvY1DWOLevi49P8ocfSUVuNsY0PZGIEjgtbxo7kcD+5BQ9c7hxrr2lj4kSsid7sAGTTE10BcbXPMa0TLN2qPw2Jh+Ur0roaHmtsHGvYKNTQ/wEsoNer2rNVckSLGbwaPSqnZPXkBElXBjAkCtEbu8bv3Vzwkix/+IVAqScHwJmgPklASRDEqgSRWSQAHvYYAC3sMABbyHAQp4DyM3A94U8CYIgiAIgiAIgiAIQvwiL0URvxEsS78bTuR/xHB2tn433MUrgMISlP+WwEsqxSUo/32Rw1BAQvZ/fSpJIAkkgSS4F2RL+N//Q2rkB7x/pYStMIDiIDzjavB4/p9Ve1COHYrjOP6r8a9tI6ntjq5t27Zta1h3bdXcrfVad07qDrNJHuGT5PBLbiC0trV3dEKhlBNBROAtHcH3OoBfBag+ddpdBJVao9XpDSIQxAfeQswd9/rE1SdIPNbIJ5cBwO1zBa9LAKHxhvet6zEZUdIQuBv5+HeVP0rA9jt3b50WgdBhBGCCwqyzWG2A3dHV3dPbbkBfP2AfkCfwZjH3j4Kq55GHklKpKuUCbQdw7u69BzFchdB44yHVePJX3UTYf/HixaMF4GhfdkJonA+ByyrzulYmAmGwy9o3BCiGVYPWEYx2KQbVA3Bq0TY8ClefPIE3i7mLKAoB9DyV/mEzeQIerxqRfevRUuP98D7wkPLdQ8i6cOHCWwHhwyEP/CDcDNyDd1dEIKB3xGlphcIK2M0YMwIaNcYn4Bi3G7om5Qm8Wb2aWcchnJ4yhPD4nUAAlQPLjbeAUESp0n4H2pdSBYZwOf7QoUu8GATAMNHVzBCm+uFSAbZhtFqn2/vaZvqx9EgMvBmCN4XgEb1jCCGUAtymb0Bu9VLjzRB20hapCEUZwGlCCi9uYDR1TANDs71LCN06oNWCuS6FbtoxvzwkSA28GYIX/c4/+ioxlR7mh9J2AFf/7HtCUUuN98MTcbWVYZCKsJ0ee3gSaikO93xEfAnjHUOwdxkEBDMW9JPNRiNg1rfCodfKFHgzBDx8ER/riVQKo/gdAFDPU3zEcuP9MDaLCv5JRkBZQnReGlD2KuOwlwiE3m6LU63BEsJQd5ezvReYn53GuMUk64qR1dxIpbivy1/9j+qVxvshv+ezhxyTc3Y+wgFwnwERCBsXiy09/9m5q75GkyAK4ycuhVvI7uDuBNe7xQkZx93d3cedr7xN3l5332nO/wLXB4l0/eofvdqsIuBn7JTcpdsOr0I+/IyJHfMj8FYkIzACI/Audx6+8BiOB7JEREREREREhuGANwe8NQ54KxzwBjjg/b/+UhiBERiBERrr7kSEocn6h5dA92T9onrU4T5reNqBbzUs3YUIvVsjA08DO760kaPewCe0Nby215fesQjpsgLA7pqQTWDMg/LkMMrKAOhd3ipCXHJ5WyswWl41qh+aFuFIIrhVMNgy/ckGhGQ8bwyK3uWtIoxcFK33I0Y2K1tarYemRZgRG6Luhfwy/hZhe4MMxwLQu7xVhBcvcLCBFam0pdush6ZF2JQX0MKV2SEouwv5APQubxXhZDEjmIaOBgkseayHpkVwSCaAUOlACMB86furjujMO6B3easI+aVf7aQBnpSplgf6oWERML+176t4NDp3+sT2PKP3RTCpLvKwAYDe5X27udyeGJ+BzYaCsoDTemhchLHVY5l12WyHQQmee5BZLlLvAKB3eTcs4WWwarJlu2M+kH2xZj00LgJg83mg1H1ZYD0X+fblNkS9LUZZMdB4D9APeduBERiBERiBERiBd7nz8IXHcDyQJSIiIiIiIiIiIiIi+hsk/vYr/s9cLvw5h51j+NZ4P36iOA54/6jW5AjvpXwA33p3+TMfOQF44XKYHMF9EToDMP30YUZ/GZJH1VPzgZGZkoUJ4GlJwhxmMrIHB3yDMbD2e8cNtj/2H+hRb1MiDDrTJQ5IyOjdkVo0LCGh/OBQ5jOXV7EfiN0ZLt6dzo/di5OJDmu/d7PUZ04/8uhRbzMiPM9+hcEdIMEF+KeiEVzolgl4S1DXDJ+kRP8cVAS937tZbpAi7/WotxkR3Ke5ucMLVoTlpzpClorQk4qOpq1suYaOoPd730Z4Lul61Pt/w/UD+GOW23Z2+sTxsxFCqa3Pv4ug93vrCHrU24gIzyUFKA54fzbC1UNMSA560175VAS931tH0KPeRvw5uLfCAPrzwz8Xwd6ScVXyhWdvQ85UBL3fW0fQo95GRPh1jRHYIkD4Rfjb/d6aHvX+H0agr9uhAyEAAAAGQv5mjzWO3RVCEiRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgRjGhjjoWLiKIBQAAAABJRU5ErkJggg=='
                            } 260w, ${g ? Y : V} 520w`,
                            placeholder: g
                              ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABeUlEQVR4AWJU1rZkAhRHHjgS2DAQ48jO//+bW4u5WHB6Qw23uBEDCapaqypJStBu7XNakWEHsmrv9cPe17Pbz/l88HsRSdAiCZCYECA8vPdcdRO4Qn8DSp/zOadbhmtULlCzgO2t8Hrvkrp+7goZwtTweN4ramJ/7n2655LnCcqD8Oc4NqJGMSKgb9UJIGyGBOxupwnne3RaqU1IItCez+n+wGinz1FTqyovD899sXuCzzndPU/geKj9jQI4XmtD4vQ7iPdLKrWSSgKQeWTn5TmlrLUq5EchBx2VPb5506iVStWqlLVGDNmKOGO4KvbtIFXFQGoTEypFrgVfpwGqilultq/fqtza6bYqWoVJQk53ztmQcOtaKwF6uUKAyVd7+uBeV0LI5ZWGymUz3FCQ4d09KP4eRXl52n0H1R3tbu//lKeKwBa6/fr6nNNE+6q8mcEct3r6o53Mvba/87x576n5E74VUvw3/i9voyQof8O8bggC4W+Y158Azxk6hkhW1QQAAAAASUVORK5CYII='
                              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABMUlEQVR4AXyRga7dIAxD7dDvvtL97j3wqCMjtEnvCKWUOk5JuNaS1LGqSO6I/yiZHzPnBKDgfXQA2gxGAU2kD0lcbMs2qpdB9nfW+Tkbv3v/wI8TlpdcN3SqT0XWXgD/uYczjNUuOYq8dO10RBXa/vC0rokr8nrrTN/mfPOm94IZn89nK3w7tYCmdee12kPGz9NbeaVuFEhaa2X6io6tSPcRdGE/t2rs2DkyqZh4+ncmvrIkhMxjzrln+o506c/iXnNqXUiq7tzcrNkzn8ISFJpCEECIQKV9foDmYWgFrK43xsKHD0JLB0WpnYTm0vG2pZDHmXX8UuGWM2dg/O7pjTHgb9ARRnfUdgqe9fV/EXWsqpzkMq1LrQwwkJaa8f1+aYahwU3ny3iIvwH9HQwMTnUAjevehnsmuFYAAAAASUVORK5CYII=',
                            alt: 'Configuration options for text.',
                            sizes: `(max-width: ${h.a.mobile}px) 50vw, 25vw`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(n.jsx)(o.b, {
                  themeId: 'dark',
                  children: Object(n.jsxs)(oe, {
                    className: 'spr__earth',
                    hideMeshes: Object(c.useMemo)(
                      () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                      []
                    ),
                    position: Object(c.useMemo)(() => [0, 0, 0], []),
                    ref: d,
                    labels: Object(c.useMemo)(
                      () => [
                        {
                          position: [0.54, 0.19, 0.18],
                          text: 'Pacific ring of fire',
                          hidden: !0,
                        },
                        { position: [0.47, -0.38, 0.04], text: 'Ruapehu', hidden: !0 },
                        { position: [0.22, 0.44, -0.35], text: 'St. Helens', hidden: !0 },
                        { position: [0.16, -0.06, 0.58], text: 'Krakatoa', hidden: !0 },
                        {
                          position: [0.11, 0.2, -0.56],
                          text: 'Par\xedcutin',
                          hidden: !0,
                        },
                        {
                          position: [0.52, 0.2, -0.23],
                          text: 'K\u012blauea',
                          hidden: !0,
                        },
                        {
                          position: [-0.24, 0.75, 0.24],
                          text: 'Mantle',
                          delay: 800,
                          hidden: !0,
                        },
                        {
                          position: [-0.24, 0.55, 0.24],
                          text: 'Outer core',
                          delay: 800,
                          hidden: !0,
                        },
                        {
                          position: [-0.24, 0.35, 0.24],
                          text: 'Inner core',
                          delay: 800,
                          hidden: !0,
                        },
                      ],
                      []
                    ),
                    scale: 0.6,
                    children: [
                      Object(n.jsx)(ae, {
                        scrim: !0,
                        animations: ['0:loop'],
                        camera: [0, 0, 1.5],
                        meshes: ['Atmosphere', 'EarthFull'],
                        children: Object(n.jsx)(a.e, {
                          children: Object(n.jsx)(a.g, {
                            children: Object(n.jsxs)(a.j, {
                              center: !0,
                              children: [
                                Object(n.jsx)(a.h, {
                                  children: 'Next-generation learning experiences',
                                }),
                                Object(n.jsx)(a.i, {
                                  children:
                                    'The flexibility of the product allowed for developers to create engaging interactive experiences as highly configurable plugins that could then be used and manipulated by learning designers.',
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      Object(n.jsx)(ae, {
                        animations: ['0:loop'],
                        camera: [0, 0, 2.4],
                        meshes: ['Atmosphere', 'EarthFull'],
                      }),
                      Object(n.jsx)(ae, {
                        animations: ['0:loop'],
                        camera: [1.14, -1.39, 0.94],
                        meshes: ['Atmosphere', 'EarthFull'],
                        children: Object(n.jsx)(a.e, {
                          children: Object(n.jsx)(a.g, {
                            width: 'xl',
                            children: Object(n.jsxs)(a.j, {
                              justify: 'end',
                              width: 's',
                              children: [
                                Object(n.jsx)(a.h, {
                                  level: 4,
                                  as: 'h3',
                                  children: 'Bringing 3D into learning',
                                }),
                                Object(n.jsx)(a.i, {
                                  children:
                                    'One really cool example is the 3D screen plugin. Learning designers can load any model into it and then configure camera positions to animate to for each section.',
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      Object(n.jsx)(ae, {
                        animations: ['0:loop'],
                        camera: [1.17, 0.69, -1.47],
                        meshes: ['Atmosphere', 'EarthFull'],
                        labels: [
                          'Pacific ring of fire',
                          'Ruapehu',
                          'St. Helens',
                          'Krakatoa',
                          'Par\xedcutin',
                          'K\u012blauea',
                        ],
                        children: Object(n.jsx)(a.e, {
                          children: Object(n.jsx)(a.g, {
                            width: 'xl',
                            children: Object(n.jsxs)(a.j, {
                              justify: 'start',
                              width: 's',
                              children: [
                                Object(n.jsx)(a.h, {
                                  level: 4,
                                  as: 'h3',
                                  children: 'Interactivity',
                                }),
                                Object(n.jsx)(a.i, {
                                  children:
                                    "Learners can then be directed to specific parts of the model and shown labels. They're also able to click and drag to orbit around and freely explore at any time.",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      Object(n.jsx)(ae, {
                        animations: ['0:loop'],
                        camera: [1.81, 0.51, 0.43],
                        meshes: ['Atmosphere', 'EarthFull'],
                        labels: [
                          'Pacific ring of fire',
                          'Ruapehu',
                          'St. Helens',
                          'Krakatoa',
                          'Par\xedcutin',
                          'K\u012blauea',
                        ],
                      }),
                      Object(n.jsx)(ae, {
                        animations: ['0:loop'],
                        camera: [0.37, 1.02, 1.84],
                        meshes: ['EarthPartial', 'Chunk'],
                        labels: ['Mantle', 'Outer core', 'Inner core'],
                        children: Object(n.jsx)(a.e, {
                          children: Object(n.jsx)(a.g, {
                            width: 'xl',
                            children: Object(n.jsxs)(a.j, {
                              justify: 'end',
                              width: 's',
                              children: [
                                Object(n.jsx)(a.h, {
                                  level: 4,
                                  as: 'h3',
                                  children: 'Animation',
                                }),
                                Object(n.jsx)(a.i, {
                                  children:
                                    'Learning designers can pick an animation included in the model to play or loop for any section without having to use any complex animation tools.',
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      Object(n.jsx)(ae, {
                        scrimReverse: !0,
                        animations: ['0:loop'],
                        camera: [0.37, 1.02, 1.84],
                        meshes: ['Atmosphere', 'EarthFull'],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(n.jsx)(s.a, {}),
          ],
        });
      };
    },
    58: function (e, t, A) {
      'use strict';
      var n = A(1),
        c = A(0),
        i = A(4),
        r = A.n(i),
        s = A(20),
        a = A.p + 'static/media/gotham-bold.73ce573b.woff2';
      A(60);
      t.a = ({
        children: e,
        level: t = 1,
        as: A,
        align: i = 'auto',
        weight: o = 'medium',
        className: l,
        ...d
      }) => {
        const g = Math.min(Math.max(t, 0), 4),
          u = A || `h${Math.max(g, 1)}`;
        return Object(n.jsxs)(c.Fragment, {
          children: [
            'bold' === o &&
              Object(n.jsxs)(s.a, {
                children: [
                  Object(n.jsx)('link', {
                    rel: 'preload',
                    href: a,
                    as: 'font',
                    crossorigin: '',
                  }),
                  Object(n.jsx)('style', {
                    children: `\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${a}) format('woff2');\n                font-display: swap;\n              }\n            `,
                  }),
                ],
              }),
            Object(n.jsx)(u, {
              className: r()(
                l,
                'heading',
                `heading--align-${i}`,
                `heading--level-${g}`,
                `heading--weight-${o}`
              ),
              ...d,
              children: e,
            }),
          ],
        });
      };
    },
    59: function (e, t, A) {
      'use strict';
      var n = A(1),
        c = A(4),
        i = A.n(c);
      A(62);
      t.a = ({
        children: e,
        size: t = 'm',
        as: A = 'p',
        align: c = 'auto',
        weight: r = 'auto',
        secondary: s,
        className: a,
        ...o
      }) =>
        Object(n.jsx)(A, {
          className: i()(
            a,
            'text',
            `text--align-${c}`,
            `text--size-${t}`,
            `text--weight-${r}`,
            { 'text--secondary': s }
          ),
          ...o,
          children: e,
        });
    },
    60: function (e, t, A) {},
    61: function (e, t, A) {
      'use strict';
      var n = A(1),
        c = A(0),
        i = A(4),
        r = A.n(i);
      A(64);
      const s = Object(
        c.forwardRef
      )(({ as: e = 'div', children: t, className: A, ...c }, i) =>
        Object(n.jsx)(e, { className: r()('section', A), ref: i, ...c, children: t })
      );
      t.a = s;
    },
    62: function (e, t, A) {},
    63: function (e, t, A) {
      'use strict';
      var n = A(1),
        c = A(0),
        i = A(4),
        r = A.n(i),
        s = A(9),
        a = A(21),
        o = A(14),
        l = A(57),
        d = A(22),
        g = A(27),
        u = A(10),
        h = A(2),
        E = A(65),
        j = A(28),
        b = A(23);
      A(68);
      const m = ({
        onLoad: e,
        loaded: t,
        inViewport: A,
        srcSet: i,
        placeholder: j,
        delay: m,
        src: w,
        alt: B,
        play: p = !0,
        reveal: v,
        ...f
      }) => {
        const O = Object(s.h)(),
          [Q, I] = Object(c.useState)(!0),
          [C, M] = Object(c.useState)(!O),
          [x, k] = Object(c.useState)(!1),
          [R, D] = Object(c.useState)(!1),
          [N, U] = Object(c.useState)(!1),
          [S, P] = Object(c.useState)(),
          [y, J] = Object(c.useState)(),
          H = Object(c.useRef)(),
          L = Object(c.useRef)(),
          V = null === w || void 0 === w ? void 0 : w.endsWith('.mp4'),
          Y = w || (null === i || void 0 === i ? void 0 : i.split(' ')[0]),
          z = !g.a && A;
        Object(c.useEffect)(() => {
          const e = () => {
              I(!1);
            },
            t = H.current;
          return (
            t.addEventListener('transitionend', e),
            function () {
              t && t.removeEventListener('transitionend', e);
            }
          );
        }, []),
          Object(c.useEffect)(() => {
            V && i
              ? (async () => {
                  const e = await Object(E.b)(i);
                  J(e);
                })()
              : V && J(w);
          }, [V, w, i]),
          Object(c.useEffect)(() => {
            const { width: e, height: t } = H.current;
            e && t && P({ width: e, height: t });
          }, []),
          Object(c.useEffect)(() => {
            L.current &&
              y &&
              (p && A
                ? !A || O || g.a || (M(!0), L.current.play())
                : (M(!1), L.current.pause()));
          }, [A, p, O, y]);
        const T = e => {
            e.preventDefault(),
              L.current.paused ? (M(!0), L.current.play()) : (M(!1), L.current.pause());
          },
          Z = () => {
            k(!0), U(!0);
          };
        return Object(n.jsxs)('div', {
          className: r()('image__element-wrapper', {
            'image__element-wrapper--reveal': v,
            'image__element-wrapper--in-viewport': A,
          }),
          onMouseOver: V
            ? () => {
                k(!0), D(!0);
              }
            : void 0,
          onMouseOut: V ? () => D(!1) : void 0,
          style: { '--delay': Object(h.c)(m + 1e3) },
          children: [
            V &&
              Object(n.jsxs)(c.Fragment, {
                children: [
                  Object(n.jsx)('video', {
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    className: r()('image__element', { 'image__element--loaded': t }),
                    autoPlay: !O,
                    role: 'img',
                    onLoadStart: e,
                    src: y,
                    'aria-label': B,
                    ref: L,
                    ...f,
                  }),
                  Object(n.jsx)(l.a, {
                    in: R || N,
                    onExit: d.b,
                    onExited: () => k(!1),
                    timeout: { enter: 0, exit: Object(h.b)(u.b.base.durationS) },
                    children: e =>
                      Object(n.jsx)(b.a, {
                        visible: x,
                        children: Object(n.jsxs)(a.a, {
                          className: r()('image__button', `image__button--${e}`),
                          onFocus: Z,
                          onBlur: () => U(!1),
                          onClick: T,
                          children: [
                            Object(n.jsx)(o.a, { icon: C ? 'pause' : 'play' }),
                            C ? 'Pause' : 'Play',
                          ],
                        }),
                      }),
                  }),
                ],
              }),
            !V &&
              Object(n.jsx)('img', {
                className: r()('image__element', { 'image__element--loaded': t }),
                onLoad: e,
                decoding: 'async',
                src: z ? Y : void 0,
                srcSet: z ? i : void 0,
                width: null === S || void 0 === S ? void 0 : S.width,
                height: null === S || void 0 === S ? void 0 : S.height,
                alt: B,
                ...f,
              }),
            Q &&
              Object(n.jsx)('img', {
                'aria-hidden': !0,
                className: r()('image__placeholder', { 'image__placeholder--loaded': t }),
                style: { '--delay': Object(h.c)(m) },
                ref: H,
                src: j,
                onLoad: e => {
                  const { width: t, height: A } = e.target;
                  P({ width: t, height: A });
                },
                width: null === S || void 0 === S ? void 0 : S.width,
                height: null === S || void 0 === S ? void 0 : S.height,
                decoding: 'async',
                alt: '',
                role: 'presentation',
              }),
          ],
        });
      };
      t.a = ({
        className: e,
        style: t,
        reveal: A,
        delay: i = 0,
        raised: a,
        src: o,
        ...l
      }) => {
        const [d, g] = Object(c.useState)(!1),
          { themeId: u } = Object(j.c)(),
          E = Object(c.useRef)(),
          b = Object(s.d)(E, !(null === o || void 0 === o ? void 0 : o.endsWith('.mp4'))),
          w = Object(c.useCallback)(() => {
            g(!0);
          }, []);
        return Object(n.jsx)('div', {
          className: r()('image', e, `image--${u}`, {
            'image--in-viewport': b,
            'image--reveal': A,
            'image--raised': a,
          }),
          style: { ...t, '--delay': Object(h.c)(i) },
          ref: E,
          children: Object(n.jsx)(m, {
            delay: i,
            onLoad: w,
            loaded: d,
            inViewport: b,
            reveal: A,
            src: o,
            ...l,
          }),
        });
      };
    },
    64: function (e, t, A) {},
    65: function (e, t, A) {
      'use strict';
      async function n({ src: e, srcSet: t, sizes: A }) {
        return new Promise((n, c) => {
          try {
            if (!e && !t) throw new Error('No image src or srcSet provided');
            const c = new Image();
            e && (c.src = e), t && (c.srcset = t), A && (c.sizes = A);
            const i = () => {
              c.removeEventListener('load', i);
              const e = c.currentSrc;
              n(e);
            };
            c.addEventListener('load', i);
          } catch (i) {
            c(`Error loading ${t}: ${i}`);
          }
        });
      }
      async function c(e) {
        const t = e.split(', ').map(e => {
            const [t, A] = e.split(' ');
            return {
              src: t,
              image: (function (e = 1, t = 1) {
                const A = document.createElement('canvas'),
                  n = A.getContext('2d');
                (A.width = e),
                  (A.height = t),
                  (n.fillStyle = 'rgba(0, 0, 0, 0)'),
                  n.fillRect(0, 0, e, t);
                const c = A.toDataURL('image/png', '');
                return A.remove(), c;
              })(Number(A.replace('w', ''))),
              width: A,
            };
          }),
          A = t.map(({ image: e, width: t }) => `${e} ${t}`).join(', '),
          c = await n({ srcSet: A });
        return t.find(e => e.image === c).src;
      }
      A.d(t, 'a', function () {
        return n;
      }),
        A.d(t, 'b', function () {
          return c;
        });
    },
    66: function (e, t, A) {
      'use strict';
      var n = A(1),
        c = A(15),
        i = A(4),
        r = A.n(i),
        s = A(16);
      A(67);
      const a = ['txt', 'png', 'jpg'];
      t.a = ({
        rel: e,
        target: t,
        children: A,
        secondary: i,
        className: o,
        href: l,
        as: d,
        ...g
      }) => {
        const u = a.includes(null === l || void 0 === l ? void 0 : l.split('.').pop()),
          h =
            (null === l || void 0 === l ? void 0 : l.includes('://')) ||
            '#' === (null === l || void 0 === l ? void 0 : l[0]) ||
            u,
          E = e || (h ? 'noreferrer noopener' : void 0),
          j = t || (h ? '_blank' : void 0),
          b = d || (h ? 'a' : c.b);
        return Object(n.jsx)(b, {
          className: r()('link', o, { 'link--secondary': i }),
          rel: E,
          href: h ? l : void 0,
          to: h ? void 0 : l,
          target: j,
          onMouseUp: s.a,
          ...g,
          children: A,
        });
      };
    },
    67: function (e, t, A) {},
    68: function (e, t, A) {},
    69: function (e, t, A) {
      'use strict';
      var n = A(1),
        c = A(66);
      A(70);
      t.a = () =>
        Object(n.jsxs)('footer', {
          className: 'footer',
          children: [
            Object(n.jsx)('span', {
              className: 'footer__date',
              children: `\xa9 ${new Date().getFullYear()} Xavier W. Wang.`,
            }),
            Object(n.jsx)(c.a, {
              secondary: !0,
              className: 'footer__link',
              href: '/humans.txt',
              target: '_self',
              children: 'By yours truly',
            }),
          ],
        });
    },
    70: function (e, t, A) {},
    72: function (e, t, A) {
      'use strict';
      A.d(t, 'c', function () {
        return E;
      }),
        A.d(t, 'b', function () {
          return j;
        }),
        A.d(t, 'e', function () {
          return b;
        }),
        A.d(t, 'a', function () {
          return m;
        }),
        A.d(t, 'd', function () {
          return w;
        }),
        A.d(t, 'g', function () {
          return B;
        }),
        A.d(t, 'h', function () {
          return p;
        }),
        A.d(t, 'i', function () {
          return v;
        }),
        A.d(t, 'j', function () {
          return f;
        }),
        A.d(t, 'f', function () {
          return O;
        });
      var n = A(1),
        c = A(0),
        i = A(4),
        r = A.n(i),
        s = A(63),
        a = A(21),
        o = A(9),
        l = A(27),
        d = A(61),
        g = A(2),
        u = A(58),
        h = A(59);
      A(73);
      function E({
        title: e,
        description: t,
        linkLabel: A = 'Visit website',
        url: c,
        roles: i,
        className: s,
      }) {
        return Object(n.jsx)(d.a, {
          className: r()('project__header', s),
          children: Object(n.jsxs)('div', {
            className: 'project__header-content',
            style: { '--initDelay': Object(g.c)(300) },
            children: [
              Object(n.jsxs)('div', {
                className: 'project__details',
                children: [
                  Object(n.jsx)(u.a, {
                    className: r()('project__title', { 'project__title--entered': !l.a }),
                    level: 2,
                    as: 'h1',
                    children: e,
                  }),
                  Object(n.jsx)(h.a, {
                    className: r()('project__description', {
                      'project__description--entered': !l.a,
                    }),
                    size: 'xl',
                    children: t,
                  }),
                  !!c &&
                    Object(n.jsx)(a.a, {
                      secondary: !0,
                      iconHoverShift: !0,
                      className: r()('project__link-button', {
                        'project__link-button--entered': !l.a,
                      }),
                      icon: 'chevronRight',
                      href: c,
                      children: A,
                    }),
                ],
              }),
              !!(null === i || void 0 === i ? void 0 : i.length) &&
                Object(n.jsx)('ul', {
                  className: 'project__meta',
                  children:
                    null === i || void 0 === i
                      ? void 0
                      : i.map((e, t) =>
                          Object(n.jsx)(
                            'li',
                            {
                              className: r()('project__meta-item', {
                                'project__meta-item--entered': !l.a,
                              }),
                              style: { '--delay': Object(g.c)(600 + 140 * t) },
                              children: Object(n.jsx)(h.a, {
                                secondary: !0,
                                as: 'span',
                                children: e,
                              }),
                            },
                            e
                          )
                        ),
                }),
            ],
          }),
        });
      }
      const j = ({ className: e, ...t }) =>
          Object(n.jsx)('article', { className: r()('project', e), ...t }),
        b = Object(c.forwardRef)(
          (
            {
              className: e,
              light: t,
              first: A,
              fullHeight: c,
              backgroundOverlayOpacity: i = 0.9,
              backgroundElement: s,
              children: a,
              ...o
            },
            l
          ) =>
            Object(n.jsxs)('section', {
              className: r()('project__section', e, {
                'project__section--light': t,
                'project__section--full-height': c,
              }),
              ref: l,
              ...o,
              children: [
                !!s &&
                  Object(n.jsx)('div', {
                    className: 'project__section-background',
                    style: { '--opacity': i },
                    children: s,
                  }),
                Object(n.jsx)(d.a, {
                  className: r()('project__section-inner', {
                    'project__section-inner--first': A,
                  }),
                  children: a,
                }),
              ],
            })
        ),
        m = ({ opacity: e = 0.7, className: t, entered: A, ...c }) => {
          const i = Object(o.g)(0.6);
          return Object(n.jsxs)('div', {
            className: r()('project__background-image', t, {
              'project__background-image--entered': A,
            }),
            children: [
              Object(n.jsx)('div', {
                className: 'project__background-image-element',
                style: { '--offset': Object(g.d)(i) },
                children: Object(n.jsx)(s.a, { alt: '', role: 'presentation', ...c }),
              }),
              Object(n.jsx)('div', {
                className: 'project__background-scrim',
                style: { '--opacity': e },
              }),
            ],
          });
        },
        w = ({ className: e, ...t }) =>
          Object(n.jsx)('div', {
            className: r()('project__image', e),
            children: Object(n.jsx)(s.a, { reveal: !0, delay: 300, ...t }),
          }),
        B = ({ className: e, width: t = 'l', ...A }) =>
          Object(n.jsx)('div', {
            className: r()(
              'project__section-content',
              `project__section-content--width-${t}`,
              e
            ),
            ...A,
          }),
        p = ({ className: e, level: t = 3, as: A = 'h2', ...c }) =>
          Object(n.jsx)(u.a, {
            className: r()('project__section-heading', e),
            as: A,
            level: t,
            align: 'auto',
            ...c,
          }),
        v = ({ className: e, ...t }) =>
          Object(n.jsx)(h.a, {
            className: r()('project__section-text', e),
            size: 'l',
            ...t,
          }),
        f = ({
          center: e,
          stretch: t,
          justify: A = 'center',
          width: c = 'm',
          noMargin: i,
          className: s,
          centerMobile: a,
          ...o
        }) =>
          Object(n.jsx)('div', {
            className: r()(
              'project__text-row',
              `project__text-row--justify-${A}`,
              `project__text-row--width-${c}`,
              s,
              {
                'project__text-row--center': e,
                'project__text-row--stretch': t,
                'project__text-row--center-mobile': a,
                'project__text-row--no-margin': i,
              }
            ),
            ...o,
          }),
        O = ({ className: e, centered: t, ...A }) =>
          Object(n.jsx)(B, {
            className: r()(
              'project__section-columns',
              { 'project__section-columns--centered': t },
              e
            ),
            ...A,
          });
    },
    73: function (e, t, A) {},
    76: function (e, t, A) {
      'use strict';
      A.d(t, 'b', function () {
        return n;
      }),
        A.d(t, 'a', function () {
          return i;
        }),
        A.d(t, 'c', function () {
          return r;
        });
      const n = e => {
          e.traverse(e => {
            if (e.isMesh)
              if ((e.geometry.dispose(), e.material.isMaterial)) c(e.material);
              else for (const t of e.material) c(t);
          });
        },
        c = e => {
          e.dispose();
          for (const t of Object.keys(e)) {
            const A = e[t];
            A && 'object' === typeof A && 'minFilter' in A && A.dispose();
          }
        },
        i = e => {
          e.dispose(), e.forceContextLoss(), (e = null);
        },
        r = e => {
          for (const t of e) t.parent.remove(t);
        };
    },
    80: function (e, t, A) {
      'use strict';
      t.a =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzRkJBRkI2MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRkJBRkI1MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5NjZGQjZDNjFBREQ4NkEyMUY4QUI3NURCM0MzNjdDMyIgc3RSZWY6ZG9jdW1lbnRJRD0iOTY2RkI2QzYxQUREODZBMjFGOEFCNzVEQjNDMzY3QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAUACADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDVxr67OZnHvkZ5HaVkZ2Ykk/Q/m/uQdwupbgmZzVugRb2sdnF4cQooHQF5aTcPhmlhmlLgsRbV/j7CD7jKshBOOiWfcpILijfAD0HNPnt1/dmEzT6lYG2o/wBbf09uncW04PR5azpdxa4z5dLdN3bi/ZpJqidQQAfVwSR/j/gPZTJvF1CSynoi3K6uraJnPwA9GhhmifbxdCFUxNxZfpY+xzPRlPQlc6IyT6dB9WbgwGNwkglkp2qn1rpbTqv/AIj6/X2F7uyTT4oI1dRxuVzLc3bRqp0jz6B7HmPJZOSoiiVUa5BAFrar/kj2TBWqQD0qtN4j2yMrKfy6YNy5OGjr1jsWkR7WVRf/AHgn3R7Z5u0Do0nnTdbImI9pHRv6X7P+60lvr4H03t/Q29yFN/Z46E9x/ZHohe/P4z/FpPD5ftvK2m2rT+r/AG309hxq511p0R2f0VH8SnidPGL/AIt/DYPB/ndPNtWq3+w9k7afFOnh0Eb36P61tf8AZ16k7Z/hn95Kf+9Or7fyjyf1tf8Ax9i3lv8Ad31Q+v8A7Pz6XTeP+7T+7+NMdf/Z';
    },
    81: function (e, t, A) {
      'use strict';
      t.a = A.p + 'static/media/spr-lesson-builder-dark.4c66acc3.jpg';
    },
    82: function (e, t, A) {
      'use strict';
      t.a = A.p + 'static/media/spr-lesson-builder-dark-large.c92ecacb.jpg';
    },
    95: function (e, t, A) {},
    98: function (e, t, A) {},
    99: function (e, t, A) {},
  },
]);
//# sourceMappingURL=7.3e85dca8.chunk.js.map
