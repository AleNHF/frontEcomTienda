<template>
    <div class="row">
            <div class="col-sm-2 my-lg-0 my-md-1">
                <div id="sidebar" class="bg-purple mb-3">
                    <div class="row" >
                    <div class="h4 text-white mt-4 text-center" style="margin-bottom: 50px;" >LuxeStore</div>
                    </div>
                     <ul>
                    <li v-if="showDashboardLink" :class="{ 'active': activeTab === 'Dashboard' }">
                        <a href="https://dashboardpython-production.up.railway.app/" class="text-decoration-none d-flex align-items-start" @click="activateTab('Dashboard')">
                            <div class="fas fa-box pt-2 me-3"></div>
                            <div class="d-flex flex-column">
                                <div class="link">Dashboard</div>
                            </div>
                        </a>
                    </li>
                    <li v-if="showVentasLink" :class="{ 'active': activeTab === 'Ventas' }">
                        <a href="#" class="text-decoration-none d-flex align-items-start" @click="activateTab('Ventas')">
                            <div class="fas fa-box-open pt-2 me-3"></div>
                            <div class="d-flex flex-column">
                                <div class="link">Ventas</div>
                            </div>
                        </a>
                    </li>
                    <li v-if="showComprasLink" :class="{ 'active': activeTab === 'Compras' }">
                        <a href="#" class="text-decoration-none d-flex align-items-start" @click="activateTab('Compras')">
                            <div class="far fa-address-book pt-2 me-3"></div>
                            <div class="d-flex flex-column">
                                <div class="link">Compras</div>
                            </div>
                        </a>
                    </li>
                    <li v-if="showProductosLink" :class="{ 'active': activeTab === 'Productos' }">
                        <a href="#" class="text-decoration-none d-flex align-items-start" @click="activateTab('Productos')">
                            <div class="far fa-user pt-2 me-3"></div>
                            <div class="d-flex flex-column">
                                <div class="link">Productos</div>
                            </div>
                        </a>
                    </li>
                    <li v-if="showUsuariosLink" :class="{ 'active': activeTab === 'Usuarios' }">
                        <a href="#" class="text-decoration-none d-flex align-items-start" @click="activateTab('Usuarios')">
                            <div class="fas fa-headset pt-2 me-3"></div>
                            <div class="d-flex flex-column">
                                <div class="link">Usuarios</div>
                            </div>
                        </a>
                    </li>
                    <li v-if="showProveedorLink" :class="{ 'active': activeTab === 'Proveedor' }">
                        <a href="#" class="text-decoration-none d-flex align-items-start" @click="activateTab('Proveedor')">
                            <div class="fas fa-headset pt-2 me-3"></div>
                            <div class="d-flex flex-column">
                                <div class="link">Proveedor</div>
                            </div>
                        </a>
                    </li>
                    <li v-if="showClienteLink" :class="{ 'active': activeTab === 'Cliente' }">
                        <a href="#" class="text-decoration-none d-flex align-items-start" @click="activateTab('Cliente')">
                            <div class="fas fa-headset pt-2 me-3"></div>
                            <div class="d-flex flex-column">
                                <div class="link">Clientes</div>
                            </div>
                        </a>
                    </li>
                </ul>
                    <div class="row"  style="margin-top: 190px;">
                        <button class="btn btn-light" @click="logout"> Salir </button>
                    </div>
                    
                </div>
            </div>
            <div class="col my-lg-0 my-1">
                <div id="main-content" class="bg-white border">
                    <div class="d-flex flex-column">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav"
                aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> <span class="fas fa-user pe-2">{{username}}</span></a>
                    </li>
                </ul>
            </div>
        </div>
                        </nav>
                    </div>
                    <div>
                         <div class="col-sm-10">
                            <h1 v-if="!activeTab">Bienvenido</h1>

                            <div v-else>
                           <!--  <div v-if="activeTab === 'Dashboard'">
                                
                            </div> -->
                            <div v-if="activeTab === 'Ventas'">
                                <venta />
                            </div>
                            <div v-if="activeTab === 'Compras'">
                                <compra />
                            </div>
                            <div v-if="activeTab === 'Productos'">
                                <productos />
                            </div>
                            <div v-if="activeTab === 'Usuarios'">
                                <usuarios />
                            </div>
                            <div v-if="activeTab === 'Proveedor'">
                                <proveedor />
                            </div>
                            <div v-if="activeTab === 'Cliente'">
                                <cliente />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import dashboardList from '../views/dashboardList.vue';
import venta from '../views/venta.vue';
import compra from '../views/compra.vue';
import productos from '../views/productos.vue';
import usuarios from '../views/usuarios.vue';
import proveedor from '../views/proveedores.vue';
import cliente from '../views/cliente.vue';

export default {
  components: { venta, compra, productos, usuarios, proveedor,cliente },

data() {
    return {
      activeTab: null,
      username:'',
      userRole: ''
    };
},
created() {
    this.username = localStorage.getItem('username');
    this.userRole = localStorage.getItem('role'); // Obtén el rol del usuario al montar el componente
  },
methods: {
    activateTab(tab) {
      this.activeTab = tab; 
      console.log( this.userRole);// Método para activar la pestaña haciendo clic en ella
    },
    
  logout() {
      localStorage.removeItem('username'); // Elimina el nombre de usuario
      localStorage.removeItem('role'); 
      this.$router.push({ name: 'home' });
}
},
 computed: {
        // Propiedades computadas para mostrar los elementos del menú según el rol del usuario
        showDashboardLink() {
            return this.userRole === 'Administrador';
        },
        showVentasLink() {
            return this.userRole === 'Cajero' || this.userRole === 'Administrador';
        },
        showComprasLink() {
            return this.userRole === 'Supervisor' || this.userRole === 'Administrador';
        },
        showProductosLink() {
            return this.userRole === 'Cajero' || this.userRole === 'Supervisor' || this.userRole === 'Administrador';
        },
        showUsuariosLink() {
            return this.userRole === 'Administrador';
        },
        showProveedorLink() {
            return this.userRole === 'Supervisor' || this.userRole === 'Administrador';
        },
        showClienteLink() {
            return this.userRole === 'Cajero' || this.userRole === 'Administrador';
        },
    },
}
</script>
<style>
    
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap');

/* Resetting */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

nav {
    min-height: 70px;
}

nav .navbar-brand .logo {
    padding: 10px 15px;
    border-radius: 8px;
}

nav .navbar-brand .logo .h2 {
    margin: 0;
}

nav .navbar-brand .h4 {
    margin-bottom: 0px;
    font-weight: 900;
}

nav .navbar-brand .fs-6 {
    font-size: 0.88rem !important;
}

nav ul li {
    padding: 0 20px;
}

.navbar-light .navbar-nav .nav-link {
    color: #333;
}

.navbar-light .navbar-nav .nav-link:hover {
    color: #39045A;
}

.navbar-light .navbar-nav .nav-link.active {
    color: #451296;
}

nav ul li a .cart {
    padding: 4px 6px;
    border-radius: 6px;
    position: relative;
    display: inline;
}

nav ul li a .cart::after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ff5252;
    top: -1px;
}

.navbar-toggler:focus {
    box-shadow: none;
}

#sidebar {
    padding: 15px 0px 15px 0px;
    border-radius: 10px;
    height: 107%;
}

#sidebar .h4 {
    font-weight: 600;
    padding-left: 15px;
}

#sidebar ul {
    list-style: none;
    margin: 0;
    padding-left: 0rem;
}

#sidebar ul li {
    padding: 10px 0;
    display: block;
    padding-left: 1rem;
    padding-right: 1rem;
    border-left: 5px solid transparent;
}

#sidebar ul li.active {
    border-left: 5px solid #ff5252;
    background-color: #FFC727;
}

#sidebar ul li a {
    display: block;
}

#sidebar ul li a .fas,
#sidebar ul li a .far {
    color: #ddd;
}

#sidebar ul li a .link {
    color: #fff;
    font-weight: 500;
}

#sidebar ul li a .link-desc {
    font-size: 0.8rem;
    color: #ddd;
}

#main-content {
    padding: 30px;
    border-radius: 15px;
}

#main-content .h5,
#main-content .text-uppercase {
    font-weight: 600;
    margin-bottom: 0;
}

#main-content .h5+div {
    font-size: 0.9rem;
}

#main-content .box {
    padding: 10px;
    border-radius: 6px;
    width: 170px;
    height: 90px;
}

#main-content .box img {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

#main-content .box .tag {
    font-size: 0.9rem;
    color: #000;
    font-weight: 500;
}

#main-content .box .number {
    font-size: 1.5rem;
    font-weight: 600;
}

.order {
    padding: 10px 30px;
    min-height: 150px;
}

.order .order-summary {
    height: 100%;
}

.order .blue-label {
    background-color: #aeaeeb;
    color: #0046dd;
    font-size: 0.9rem;
    padding: 0px 3px;
}

.order .green-label {
    background-color: #a8e9d0;
    color: #008357;
    font-size: 0.9rem;
    padding: 0px 3px;
}

.order .fs-8 {
    font-size: 0.85rem;
}

.order .rating img {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.order .rating .fas,
.order .rating .far {
    font-size: 0.9rem;
}

.order .rating .fas {
    color: #daa520;
}

.order .status {
    font-weight: 600;
}

.order .btn.btn-primary {
    background-color: #fff;
    color: #4e2296;
    border: 1px solid #4e2296;
}

.order .btn.btn-primary:hover {
    background-color: #4e2296;
    color: #fff;
}

.order .progressbar-track {
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
}

.order .progressbar-track .progressbar {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0rem;
}

.order .progressbar-track .progressbar li {
    font-size: 1.5rem;
    border: 1px solid #333;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: #dddddd;
    z-index: 100;
    position: relative;
}

.order .progressbar-track .progressbar li.green {
    border: 1px solid #007965;
    background-color: #d5e6e2;
}

.order .progressbar-track .progressbar li::after {
    position: absolute;
    font-size: 0.9rem;
    top: 50px;
    left: 0px;
}

#tracker {
    position: absolute;
    border-top: 1px solid #bbb;
    width: 100%;
    top: 25px;
}

#step-1::after {
    content: 'Placed';
}

#step-2::after {
    content: 'Accepted';
    left: -10px;
}

#step-3::after {
    content: 'Packed';
}

#step-4::after {
    content: 'Shipped';
}

#step-5::after {
    content: 'Delivered';
    left: -10px;
}



/* Backgrounds */
.bg-purple {
    background-color: #39045A;
}

.bg-light {
    background-color: #f0ecec !important;
}

.green {
    color: #007965 !important;
}

/* Media Queries */
@media(max-width: 1199.5px) {
    nav ul li {
        padding: 0 10px;
    }
}

@media(max-width: 500px) {
    .order .progressbar-track .progressbar li {
        font-size: 1rem;
    }

    .order .progressbar-track .progressbar li::after {
        font-size: 0.8rem;
        top: 35px;
    }

    #tracker {
        top: 20px;
    }
}

@media(max-width: 440px) {
    #main-content {
        padding: 20px;
    }

    .order {
        padding: 20px;
    }

    #step-4::after {
        left: -5px;
    }
}

@media(max-width: 395px) {
    .order .progressbar-track .progressbar li {
        font-size: 0.8rem;
    }

    .order .progressbar-track .progressbar li::after {
        font-size: 0.7rem;
        top: 35px;
    }

    #tracker {
        top: 15px;
    }

    .order .btn.btn-primary {
        font-size: 0.85rem;
    }
}

@media(max-width: 355px) {
    #main-content {
        padding: 15px;
    }

    .order {
        padding: 10px;
    }
}
</style>