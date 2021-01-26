import monitorBaseService from '@/service/monitor.base.js'

export function getdemo() {
    return monitorBaseService.get('Test/demo')
}