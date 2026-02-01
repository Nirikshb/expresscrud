import app from './app.js';

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log('---');
      console.log('is ready??');
      console.log('API available at http://localhost:5000');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
