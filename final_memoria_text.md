# MEMORIA TÉCNICA: PROYECTO ERASMUS CONNECT US
**Versión: ErasmusConnect_v0 (Estable)**

## 1. Introducción y Origen del Proyecto
Erasmus Connect US es una iniciativa nacida de la experiencia real y la visión de dos estudiantes de la Universidad de Sevilla (US), uno de los cuales se encuentra actualmente realizando su movilidad Erasmus. Esta dualidad nos ha permitido identificar de primera mano las carencias del sistema actual: nos encontramos con una plataforma institucional que, aunque funcional, resulta en ocasiones obsoleta y poco intuitiva para las necesidades dinámicas de los alumnos de hoy.

El reto que nos propusimos fue ambicioso: **reconstruir desde cero el portal de movilidad de la Escuela Técnica Superior de Ingeniería (ETSI)**, centralizando toda la información crítica en una interfaz moderna y añadiendo una herramienta revolucionaria que cambia por completo la experiencia del estudiante: **EL FORO COMUNITARIO**.

Entendemos esta **Versión 0** como el primer paso de un proyecto con un potencial inmenso para transformar la gestión del intercambio académico en nuestra universidad.

## 2. El Corazón de la Innovación: El Foro Erasmus
La gran carencia que detectamos fue la dispersión de la información práctica. Para resolver dudas sobre alojamiento, convalidaciones, trámites locales o vida social, los estudiantes se ven obligados a buscar en redes sociales externas, grupos de WhatsApp efímeros o foros de terceros ajenos a la US.

**Nuestra solución centraliza este conocimiento**:
- **Estructura por Destinos**: Hemos organizado hilos específicos para cada uno de los 101 destinos de la ETSI, clasificados por países y ciudades.
- **Información Permanente en la Nube**: Gracias a la tecnología de persistencia cloud (Supabase), las experiencias de los veteranos no se pierden en chats privados. Quedan registradas para que los futuros alumnos puedan consultarlas en cualquier momento.
- **Gestión Participativa**: Los estudiantes pueden preguntar, recibir respuestas reales de compañeros que ya han estado allí, y gestionar (editar o borrar) sus propios comentarios.
- **Moderación Activa**: El sistema permite a los administradores regular los contenidos para mantener un ambiente de ayuda profesional y constructiva.

## 3. Arquitectura y Funcionalidades del Portal

### 3.1. Panel de Control e Interfaz (index.html)
Hemos creado una identidad visual bajo la **Estética US**, con un diseño basado en tarjetas de alto impacto visual. Los "cuadrados" informativos permiten un acceso instantáneo a todas las áreas relevantes (Destinos, Convalidaciones, Foro, Plazos y Becas) con una fluidez total.

### 3.2. Gestión de Destinos y Convalidaciones (destinos.html / convalidaciones.html)
Hemos centralizado los 101 destinos disponibles en la ETSI.
- **Destinos**: Filtrado inteligente por regiones (Europa, No Erasmus, Asia, etc.) con acceso directo a los listados de plazas.
- **Histórico de Convalidaciones**: Repositorio exclusivo de la ETSI que permite verificar acuerdos académicos previos. 
> *Nota: Actualmente optimizado para la ETSI debido a la disponibilidad de datos, pero con infraestructura lista para expandirse a todas las facultades de la US si se nos suministra la información necesaria.*

### 3.3. Tiempos, Ayudas y Contacto
- **Cronograma**: Línea de tiempo visual para monitorizar los hitos del calendario Erasmus.
- **Becas y Financiación**: Enlaces directos a las plataformas del Banco Santander y el Plan Propio de la US para agilizar la solicitud de ayudas.
- **Soporte Directo**: Ventana de contacto configurable para que cualquier duda pueda ser dirigida instantáneamente a los responsables correspondientes.

## 4. Especificaciones Técnicas
Para garantizar la estabilidad de esta **Versión 0**, hemos utilizado las últimas tecnologías de desarrollo web:
- **Despliegue**: Hosting profesional compartido mediante GitHub Pages.
- **Persistencia**: Backend dinámico en PostgreSQL (Supabase) para comunicación en tiempo real.
- **Omnicanalidad**: Diseño **Responsive** optimizado específicamente para una experiencia perfecta tanto en ordenadores como en dispositivos móviles.

## 5. Visión de Futuro y Propuesta a la Universidad
Este proyecto no es solo una página web; es una propuesta de mejora para toda la comunidad de la Universidad de Sevilla. Queremos "vender" esta visión a la institución para llevar el Erasmus al siguiente nivel.

**Propuesta de Crecimiento**:
1.  **Escalabilidad**: Podemos integrar todas las facultades de la US, reorganizando los destinos y convalidaciones para cada carrera.
2.  **Marketing Estudiantil**: Propiciamos una campaña de visibilidad mediante redes sociales (como un perfil de Instagram dedicado) y cartelería física en las facultades para que el uso del foro se convierta en el estándar de la comunidad.
3.  **Co-Creación**: Estamos abiertos a modificar y ajustar cualquier funcionalidad de la plataforma según las directrices y necesidades específicas de la Universidad.

**Erasmus Connect US** es, en esencia, la herramienta que nosotros, como estudiantes, siempre hemos querido tener. Estamos listos para que sea la herramienta que la Universidad de Sevilla ofrezca oficialmente a su comunidad internacional.

**Acceso al Proyecto**: [https://Erasmus-Connect.github.io/erasmusconect/](https://Erasmus-Connect.github.io/erasmusconect/)

---
© 2026 erasmusconect - Memoria Técnica de Proyecto | Versión 0
