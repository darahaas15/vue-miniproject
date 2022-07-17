<template>
    <nav>
        <ul>
            <li>
                <router-link to="/"> Notes</router-link>
            </li>
            <li>
                <router-link to="/add" class="nav-link">Add Note</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
    list-style-type: none;
    text-align: right;
    margin: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
    color: black;

    background-color: #cdbe9c;
    color: black;
    padding: 7px 20px;
}
a:hover {
    background-color: #cab381;
    color: black;
    transition: 0.3s;
}
nav {
    background: #ac986d;
    padding: 14px 0;
    margin-bottom: 40px;
}
</style>
