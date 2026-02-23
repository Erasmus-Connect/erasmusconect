# PROPUESTA DE MODERNIZACIÓN DE LA MOVILIDAD INTERNACIONAL: ERASMUS CONNECT US

**DOCUMENTO DE VISIÓN ESTRATÉGICA Y MEMORIA TÉCNICA**
**Versión: 0.1 RC (Release Candidate) - ErasmusConnect_0**

## RESUMEN EJECUTIVO
Erasmus Connect US es una plataforma integral de gestión y dinamización de la movilidad internacional diseñada específicamente para la comunidad universitaria de la Escuela Técnica Superior de Ingeniería (ETSI) de la Universidad de Sevilla. El proyecto nace para subsanar la brecha comunicativa y administrativa existente, transformando un sistema de información estático y descentralizado en un ecosistema digital interactivo, persistente y orientado al estudiante. Con una infraestructura basada en tecnologías de vanguardia (Supabase, GitHub Cloud) y un diseño centrado en la experiencia de usuario (UX), Erasmus Connect US se posiciona como el estándar futuro para la internacionalización de la ingeniería en Sevilla.

---

## 1. GÉNESIS Y FILOSOFÍA DEL PROYECTO
### 1.1. El Factor Humano: Estudiantes para Estudiantes
La génesis de Erasmus Connect US no es teórica; proviene de la experiencia directa. El equipo de desarrollo está compuesto por dos estudiantes de ingeniería de la Universidad de Sevilla, uno de los cuales se encuentra actualmente inmerso en su propia movilidad internacional. 

Esta perspectiva privilegiada nos ha permitido detectar que, mientras los procesos administrativos progresan, las plataformas digitales que los soportan han quedado rezagadas. La actual interfaz institucional se percibe como obsoleta, dificultando el acceso a información crítica y frustrando al estudiante en un momento de gran estrés logístico y emocional.

### 1.2. Misión y Visión
Nuestra misión ha sido reconstruir la experiencia de movilidad desde cero. Nos propusimos el reto de centralizar no solo los documentos oficiales (PDFs de plazas, convalidaciones), sino también el **conocimiento tácito** de la comunidad: aquello que no está en los boletines oficiales pero que determina el éxito de un Erasmus (alojamiento, trámites locales, vida académica real).

---

## 2. LA GRAN INNOVACIÓN: EL ECOSISTEMA DE FOROS
### 2.1. El Problema de la Información Efímera
Hasta hoy, el intercambio de experiencias entre estudiantes veteranos y nuevos candidatos ocurría en espacios ajenos a la universidad (grupos de WhatsApp, Facebook, redes sociales genéricas). Esta información es valiosa pero efímera; se pierde en hilos infinitos y no es accesible para las promociones futuras.

### 2.2. La Solución: Conocimiento Persistente en la Nube
Erasmus Connect US introduce un sistema de foros dinámico y persistente integrado directamente en el portal:
- **Estructura Jerárquica**: Hilos específicos para cada uno de los **101 destinos** de la ETSI, organizados por país y ciudad.
- **Tecnología de Datos en Tiempo Real**: Implementación de **Supabase** (PostgreSQL) para asegurar que cada mensaje, consejo o respuesta quede registrado permanentemente en la nube.
- **Interactividad Total**: Los estudiantes pueden publicar dudas, responder a hilos existentes, y gestionar su propio contenido (editar/borrar), fomentando una comunidad responsable y activa.
- **Moderación Institucional**: La plataforma incluye un modo de administración para que la Universidad pueda supervisar y moderar el contenido, garantizando un entorno académico y seguro.

---

## 3. ARQUITECTURA DEL PORTAL Y EXPERIENCIA DE USUARIO
### 3.1. Panel de Control (index.html)
Se ha diseñado siguiendo una estética "Premium US", utilizando el rojo y oro corporativos bajo una jerarquía visual de tarjetas. El objetivo es que el estudiante, con un solo golpe de vista, tenga acceso a:
- Estado de los Destinos.
- Repositorio de Convalidaciones.
- Actividad reciente del Foro.
- Calendario oficial de Plazos.

### 3.2. Gestión de Destinos y Convalidaciones (ETSI Core)
Hemos digitalizado y organizado el repositorio completo de la ETSI:
- **Buscador de Destinos**: Una interfaz limpia para filtrar plazas por regiones (Erasmus+, No Erasmus, Asia, Dobles Grados).
- **Hub de Convalidaciones**: Acceso al historial de asignaturas validadas por otros alumnos. Es el punto más crítico para la seguridad académica del estudiante, permitiéndole planificar su acuerdo de estudios basado en éxitos anteriores.

### 3.3. Soporte, Tiempos y Ayudas
- **Timeline de Hitos**: Un cronograma visual que acompaña al estudiante desde la solicitud inicial hasta el cierre del expediente tras el regreso.
- **Sección de Financiación**: Integración directa con las pasarelas de Becas Santander y el Plan Propio de la US, reduciendo los clics necesarios para iniciar los trámites económicos.

---

## 4. ESPECIFICACIONES TÉCNICAS Y OMNICANALIDAD
Para asegurar que Erasmus Connect US sea una herramienta de uso diario, se ha desarrollado bajo estándares tecnológicos robustos:
- **Hosting y Despliegue**: Sincronización continua mediante GitHub Pages, garantizando una disponibilidad del 99.9%.
- **Base de Datos**: Backend Serverless (Supabase) que permite escalar la plataforma sin necesidad de mantenimiento complejo de servidores.
- **Filosofía Mobile-First**: Conscientes de que el estudiante universitario gestiona su vida desde el smartphone, la interfaz es **100% responsiva**. Cada tabla, foro y botón ha sido optimizado para una experiencia móvil fluida.

---

## 5. IMPACTO ESTRATÉGICO Y ESCALABILIDAD (EL FUTURO)
Esta versión actual (v0) es solo el punto de partida. Erasmus Connect US está diseñado para ser "comercializado" internamente y adoptado oficialmente por la Universidad de Sevilla.

### 5.1. Potencial de Expansión
- **Multifacultad**: La arquitectura permite replicar el modelo de la ETSI en todas las facultades de la US de forma casi instantánea, simplemente inyectando los datos específicos de cada centro.
- **Integración Social**: Proponemos la creación de una marca propia ("ErasmusConnect US") con presencia en Instagram y otras redes para dinamizar la participación en los foros.
- **Campañas Físicas**: Contamos con la capacidad de diseñar cartelería y materiales de marketing para convertir la plataforma en el punto de encuentro natural de la universidad.

### 5.2. Conclusión
Erasmus Connect US es la herramienta que el estudiante de hoy exige y que la universidad de mañana necesita. No es solo software; es un compromiso con la excelencia en la movilidad internacional y una apuesta por el liderazgo digital de la Universidad de Sevilla. Estamos listos para adaptar, mejorar y escalar este proyecto hasta convertirlo en el referente de la comunidad internacional de la ETSI.

**Acceso al Proyecto en Vivo:** [https://Erasmus-Connect.github.io/erasmusconect/](https://Erasmus-Connect.github.io/erasmusconect/)

---
© 2024 erasmusconect - Proyecto de Innovación Estudiantil | Universidad de Sevilla
