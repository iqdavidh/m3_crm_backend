
function getResultadoAutenticacion(success, data, msg=''){
  return {
    success,
    data,
    msg
  }
}

const AutService = {
      async getDataFromUserPass(user, password) {

        const mockUser = {
          id: 1,
          user: 'admin',
          password: 'pass'
        };

        let d = null;

        if (user === mockUser.user && password === mockUser.password) {


          const publicData = {
            user: 'admin',
            profile: ['admin']
          };

          const internalData = {...publicData};
          internalData.id = mockUser.id;

          const data = {
            public: publicData,
            internal: internalData
          };

          d=getResultadoAutenticacion(true, data)

        } else {
          d = getResultadoAutenticacion(false,null,"Datos Incorrectos");
        }

        return Promise.resolve(d);

      }
    }
;

module.exports = AutService;
