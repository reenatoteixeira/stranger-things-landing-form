import { subscribeToClub } from "./firebase/collection.js"

const txtName = document.getElementById("txtName")
const txtEmail = document.getElementById("txtEmail")
const txtLevel = document.getElementById("txtLevel")
const txtCharacter = document.getElementById("txtCharacter")
const btnSubscribe = document.getElementById("btnSubscribe")

btnSubscribe.addEventListener("click", () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = subscribeToClub(subscription)
    console.log(`Signed Up: ${subscriptionId}`)

    txtName.value = ""
    txtEmail.value = ""
    txtLevel.value = ""
    txtCharacter.value = ""

    alert("Successfully signed up!")
})