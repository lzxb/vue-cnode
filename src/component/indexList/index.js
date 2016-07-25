import Tool from '../../Tool'

export default {
    data() {
        return {
            data: [],
            success: false,
            query: {
                tab: 'all',
                page: 1,
                limit: 20,
                mdrender: false
            }
        }
    },
    asyncData(resolve, reject) {
        Tool.get('/api/v1/topics', this.query, resolve, reject)
    }
}