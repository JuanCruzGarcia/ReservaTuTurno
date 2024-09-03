export const authService = {
    login: async (email, password) => {
      // Lógica de autenticación (simulada)
      if (email === 'admin@admin.com') {
        return { role: 'admin', email };
      } else {
        return { role: 'client', email };
      }
    },
  };
  