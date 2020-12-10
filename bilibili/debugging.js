

/**
 * 加密握手信息：如传入的参数是：e={"uid":397023646,"roomid":21221900,"protover":0},t=7
 * */
e.prototype.convertToArrayBuffer = function(e, t) {
    this.encoder || (this.encoder = a.a.getEncoder());
    var n = new ArrayBuffer(i.a.WS_PACKAGE_HEADER_TOTAL_LENGTH)
        , r = new DataView(n,i.a.WS_PACKAGE_OFFSET)
        , o = this.encoder.encode(e);
    return r.setInt32(i.a.WS_PACKAGE_OFFSET, i.a.WS_PACKAGE_HEADER_TOTAL_LENGTH + o.byteLength),
        this.wsBinaryHeaderList[2].value = t,
        this.wsBinaryHeaderList.forEach((function(e) {
                4 === e.bytes ? r.setInt32(e.offset, e.value) : 2 === e.bytes && r.setInt16(e.offset, e.value)
            }
        )),
        a.a.mergeArrayBuffer(n, o)
}





