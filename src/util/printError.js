/**
 * 此函数适用于 python flask 返回的form表单验证 错误信息的打印
 * @param self
 * @param data
 */
export function printError(self, data) {
    if (typeof data.msg == "object") {
        if (typeof data.msg.length == 'number') {
            for (let j = 0; j < data.msg.length; j++) {
                printError(self, {msg: data.msg[j]})
            }
        } else {
            for (let i in data.msg) {
                for (let j = 0; j < data.msg[i].length; j++) {
                    printError(self, {msg: data.msg[i][j]})
                }
            }
        }
    }
    if (typeof data.msg == "string") {
        self.$Message.error(data.msg)
    }
}
