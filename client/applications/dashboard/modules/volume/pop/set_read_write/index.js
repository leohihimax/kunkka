var commonModal = require('client/components/modal_common/index');
var config = require('./config.json');
var __ = require('i18n/client/dashboard.lang.json');
var request = require('../../request');

function pop(obj, parent, callback) {
  config.fields[0].info = __[config.fields[0].field].replace('{0}', obj.name);

  var props = {
    __: __,
    parent: parent,
    config: config,
    onInitialize: function(refs) {
    },
    onConfirm: function(refs, cb) {
      request.setReadWrite(obj).then((res) => {
        callback && callback(res);
        cb(true);
      });
    },
    onAction: function(field, status, refs){}
  };

  commonModal(props);
}

module.exports = pop;