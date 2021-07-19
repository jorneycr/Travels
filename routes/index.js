import express from 'express';
import {
        paginaInicio, 
        paginaNosotros, 
        paginasViajes, 
        paginaTestimoniales, 
        paginasDetalleViaje
}from '../controllers/paginasController.js';

import{
        guardarTestimonial    
}from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginasViajes);
router.get('/viajes/:slug', paginasDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;