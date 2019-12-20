#pull base image
FROM nginx:1.13.3-alpine
#nginx config
COPY nginx.conf /etc/nginx/conf.d/
#delete html folder
RUN rm -rf /usr/share/nginx/html/*
#copy dist to docker image
COPY /dist/AplicacionSeguridadVisual /usr/share/nginx/html/AplicacionSeguridadVisual

CMD ["nginx", "-g", "daemon off;"]
