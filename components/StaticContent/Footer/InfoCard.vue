<template>
    <div class="bg-black footer">

        <v-container class="custom_container">
            <v-row class="my-16 ">
                <!-- Loop through FooterContent -->
                <v-col v-for="(section, index) in FooterContent" :key="index" cols="12" sm="3" lg="3" md="3" xl="3" class="mb-5">
                    <h3 class="mb-2">{{ section.Header }}</h3>
                    <ul>
                        <li v-for="(item, idx) in section.Content" :key="idx" class="d-flex align-center pa-2 text-body-1">
                            <!-- Render icon if present -->
                            <v-icon v-if="item.icon" class="mr-2">{{ item.icon }}</v-icon>
                            <span>{{ item.content }}</span>
                        </li>
                    </ul>
                </v-col>

                <ul class="list-unstyled mt-4 d-flex footer-list">
  <li v-for="(SocialMedia, index) in SocialMediaHandles" :key="index">
    <a :href="SocialMedia.link" class="mx-4 text-white social-icon">
      <v-icon class="icon-color">
        {{ SocialMedia.icon }}
      </v-icon>
    </a>
  </li>
</ul>
         <!-- <ul class="list-unstyled mt-4 d-flex footer-list ">
                        <li v-for="SocialMedia, index in SocialMediaHandles" :key="index">
                            <a :href="SocialMedia.link" class="mx-4 text-white">
                                <v-icon>
                                    {{ SocialMedia.icon }}
                                </v-icon>
                            </a>

                        </li>

                    </ul> -->
 
                    
 
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            SocialMediaHandles: [
                {
                    link: "https://www.facebook.com/profile.php?id=61560663837759",
                    icon: "mdi-facebook",
                },
                {
                    link: "",
                    icon: "mdi-twitter",
                },
                {
                    link: "",
                    icon: "mdi-linkedin",
                },
                {
                    link: "https://www.instagram.com/mustbuycollections?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                    icon: "mdi-instagram",
                }
            ],
            FooterContent: [{
                Header: "Store Information",
                Content: [{
                    icon: "mdi-map-marker",
                    content: `Must buy collections,
                                Chennai,
                                Tamil Nadu`,
                    link: ""
                },
                {
                    icon: "mdi-phone",
                    content: "+91 7305560843",
                    link: ""
                },
                {
                    icon: "mdi-email-outline",
                    content: "mbc@gmail.com",
                    link: ""
                },]
            },
            {
                Header: "Products",
                Content: [{
                    icon: "",
                    content: "Bracelet",
                    link: ""
                },
                {
                    icon: "",
                    content: "Chains",
                    link: ""
                },
                {
                    icon: "",
                    content: "Earrings",
                    link: ""
                },
                {
                    icon: "",
                    content: "Rings",
                    link: ""
                },

                ]
            },
            {
                Header: "Our Company",
                Content: [{
                    icon: "",
                    content: "Delivery",
                    link: ""
                },
                {
                    icon: "",
                    content: "Legal Notice",
                    link: ""
                },
                {
                    icon: "",
                    content: "Terms and conditions of use",
                    link: ""
                },
                {
                    icon: "",
                    content: "About us",
                    link: ""
                },
                ]
            },
            ]
        }
    }

}
</script>

<style scoped>
 

/* list Link */
.list-unstyled {
    /* padding-left: 0; */
    list-style: none;
}   
 
 
/* Target the v-icon inside the social-icon anchor */
.social-icon .icon-color {
  color: white; /* Default color */
  transition: color 0.3s ease;
}

/* Change icon color on hover */
.social-icon:hover .icon-color {
  color: #D3BEA6; /* Hover color */
}
</style>