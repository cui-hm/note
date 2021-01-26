import monitorBaseService from '@/service/monitor.base.js'

export function getdemo() {
    return monitorBaseService.get('Test/demo')
}


export function insertNote(data) {
    return monitorBaseService.post('note/insertNote',data)
}