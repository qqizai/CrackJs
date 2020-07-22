
function my_fp() {
    var S = h = x(n)//S其实是等于 对象n的字符串形式，如："{'v':'v1.1','fp':'25662623634134,7139997656248','u':'D181595319310996V4r','h':'dun.163.com'}"
        , n = se;
    if (null == n || void 0 == n)
        throw Error(u[73]);
    null != S && void 0 != S || (S = l[0]);
    var E, w = S;
    E = o(null == S ? [] : d(S));
    //d(S) 是一个将 字符串S进行URL编码，然后再转换为ascii码，最后返回一个数组，一个字符串作为一个元素，其实最后返回的数组是可以还原字符串的.
    //再使用o()函数将其转换为指定的长度的加密后的数据
    var R = d(w + E)
        , k = d(n);
    null == R && (R = []),
        E = [];
    // for (var C = t[9]; C < ae; C++) {
    //     var O = Math.random() * t[295]
    //         , O = Math.floor(O);
    //     E[C] = b(O)
    // }
    for (var C = 0; C < 4; C++) {
        var O = Math.random() * 256
            , O = Math.floor(O);
        E[C] = b(O)
    }

    var X, k = r(k), k = y(k, r(E)), C = k = r(k);
    if (null == R || void 0 == R || R.length == 0)
        X = f(ie);//ie=64
    else {
        var L = R.length
            , V = 0
            // , V = L % ie <= ie - oe ? ie - L % ie - oe : ie * t[10] - L % ie - oe
            , V = L % 64 <= 64 - 4 ? 64 - L % 64 - 4 : 64 * 2 - L % 64 - 4
            , O = [];
        c(R, t[9], O, t[9], L);
        for (var B = t[9]; B < V; B++)
            O[L + B] = t[9];
        c(j(L), t[9], O, L + V, oe),
            X = O
    }
    if (L = X,
    null == L || L.length % ie != t[9])
        throw Error(u[83]);
    X = [];
    // for (var Y = t[9], F = L.length / ie, U = t[9]; U < F; U++) {
    //     X[U] = [];
    //     for (var z = t[9]; z < ie; z++)
    //         X[U][z] = L[Y++]
    // }
    for (var Y = 0, F = L.length / 64, U = 0; U < F; U++) {
        X[U] = [];
        for (var z = 0; z < 64; z++)
            X[U][z] = L[Y++]
    }

    Y = [],
        // c(E, t[9], Y, t[9], ae);
        c(E, 0, [], 0, 4);//E就是前面生成的参数，可以写死，因为是随机生成的：本地生成：[-128, -127, -127, -128]；浏览器生成：[120, 41, 62, -96]
    for (var K = X.length, G = t[9]; G < K; G++) {
        var J, Q, Z = X[G];
        if (null == Z)
            Q = null;
        else {
            for (var ee = b(t[92]), F = [], te = Z.length, ne = t[9]; ne < te; ne++)
                F.push(v(Z[ne], ee));
            Q = F
        }
        var re;
        if (F = Q,
        null == F)
            re = null;
        else {
            for (var ce = b(t[91]), U = [], je = F.length, ve = t[9]; ve < je; ve++)
                U.push(v(F[ve], ce--));
            re = U
        }
        if (F = re,
        null == F)
            J = null;
        else {
            for (var ge = b(t[110]), U = [], _e = F.length, we = t[9]; we < _e; we++)
                U.push(g(F[we], ge++));
            J = U
        }
        var Te, Se = y(J, k);
        if (F = Se,
            U = C,
        null == F)
            Te = null;
        else if (null == U)
            Te = F;
        else {
            for (var z = [], Ee = U.length, Re = t[9], ke = F.length; Re < ke; Re++)
                z[Re] = b(F[Re] + U[Re % Ee]);
            Te = z
        }
        var Se = y(Te, C)
            , Ce = i(Se)
            , Ce = i(Ce);
        c(Ce, t[9], Y, G * ie + ae, ie),
            C = Ce
    }
    var Oe;//这个是指纹的部分参数
    if (null == Y || void 0 == Y)
        Oe = null;
    else if (Y.length == 0)
        Oe = "";//Oe = l[0]
    else {
        var Ie = 3;
        try {
            // for (var K = [], $e = t[9]; $e < Y.length; ) {
            for (var K = [], $e = 0; $e < Y.length; ) {
                if (!($e + Ie <= Y.length)) {
                    K.push(a(Y, $e, Y.length - $e));
                    break
                }
                K.push(a(Y, $e, Ie)),
                    $e += Ie
            }
            // Oe = K.join(l[0])
            Oe = K.join("")
        } catch (Xe) {
            throw Error(u[64])
        }
    }
    h = Oe



}


console.log(my_fp())

