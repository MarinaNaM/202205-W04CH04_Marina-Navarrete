# Listado de responsabilidades:

## Componentes y responsabilidades:

    - Info:
    - Display: encargado de pintar los números que le proporciona
    - Actions: componente padre de Action que se encarga de mostrar los botones de llamar y colgar.
    - Action: componente hijo de Actions encargado de darle funcionalidad a Key
    - Keyboard: componente padre de Key, su responsabilidad es pintar la lista ordenada de Key.
        - Key: (numeritos) componente hijo que se encarga de que se vea el número y recibir la función de action.
