# MASCARA DE COMANDOS MAKE

#1. Instalar las dependencias
install:
	npm install

#2. Ejecutar la aplicación en localhost
dev:
	npm run dev

# ---- Comandos de Despliegue ---
build:
	npm run build

serve:
	npm run serve

# --- Eliminar node_modules
purge:
	rm -rf ./node_modules