//Replace with correct values

var ldap = {
    server: {
      url: 'ldap://url:port',
      bindDN: 'admin-username',
      bindCredentials: 'admin-password',
      searchBase: 'dc=example,dc=com',
      searchFilter: '(sAMAccountName={{username}})' //Keep as is
    }
}

module.exports = ldap;