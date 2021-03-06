Ext.define('EM.store.RememberMe', {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage',

    config: {
        model: 'EM.model.RememberMe',
        proxy: {
            type: 'localstorage',
            id: 'remember-me-store'
        },
        sorters: [
            { property: 'userId', direction: 'ASC' }
        ]
    }
});
