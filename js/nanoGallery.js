jQuery(document).ready(function () {

    // build the gallery
    jQuery("#origami-gallery").nanogallery2({
        items:[
            {
                src:   'https://i.ibb.co/92L3FLT/Box-of-Cranes.png',     // image url
                srct:  'https://i.ibb.co/BjxKXxZ/Box-of-Cranes.png',    // thumbnail url
                title: 'Box of Cranes'         // element title
            },

            { src: 'https://i.ibb.co/rwHqRB7/Rhino.jpg',
                srct: 'https://i.ibb.co/TgtJxQv/Rhino.jpg',
                title: 'Rhino' },

            { src: 'https://i.ibb.co/C6Ln7DZ/image0.jpg',
                srct: 'https://i.ibb.co/BGkgZFx/image0.jpg',
                title: 'Sloth' },

            { src: 'https://i.ibb.co/Db2vg1y/triple-threat.jpg',
                srct: 'https://i.ibb.co/4frXgFG/triple-threat.jpg',
                title: 'Triple Threat' },

            { src: 'https://i.ibb.co/sm8B1Cp/Platypus.jpg',
                srct: 'https://i.ibb.co/3rgJFv5/Platypus.jpg',
                title: 'Platypus' },

            { src: 'https://i.ibb.co/FgQynng/Rabbit.jpg',
                srct: 'https://i.ibb.co/gz0f66z/Rabbit.jpg',
                title: 'Rabbit' },

            { src: 'https://i.ibb.co/Y86xjwN/Pig.jpg',
                srct: 'https://i.ibb.co/QnZ4mtJ/Pig.jpg',
                title: 'Pig' },

            { src: 'https://i.ibb.co/M16kXpg/Turtle.jpg',
                srct: 'https://i.ibb.co/VCmYKDL/Turtle.jpg',
                title: 'Turtle' },

            { src: 'https://i.ibb.co/2WHyyB9/Kangaroo.jpg',
                srct: 'https://i.ibb.co/hLwyyv6/Kangaroo.jpg',
                title: 'Kangaroo' },

            { src: 'https://i.ibb.co/hfTZvfp/Giraffe.jpg',
                srct: 'https://i.ibb.co/L5sJf54/Giraffe.jpg',
                title: 'Giraffe' },

            { src: 'https://i.ibb.co/Swkpd1b/Fox.jpg',
                srct: 'https://i.ibb.co/chWdCp0/Fox.jpg',
                title: 'Fox' },

            { src: 'https://i.ibb.co/x2ZMt3r/Foil-T-Rex.jpg',
                srct: 'https://i.ibb.co/mRpHVSP/Foil-T-Rex.jpg',
                title: 'Aluminum Foil T-Rex' },

            { src: 'https://i.ibb.co/93NKZX9/Elephant.jpg',
                srct: 'https://i.ibb.co/n8bdP2s/Elephant.jpg',
                title: 'Elephant' },

            { src: 'https://i.ibb.co/27wC7c8/dime-for-scale.jpg',
                srct: 'https://i.ibb.co/7JHZJrg/dime-for-scale.jpg',
                title: 'Tiny Crane' },

            { src: 'https://i.ibb.co/31s9nrj/big-swan.jpg',
                srct: 'https://i.ibb.co/F6WLFxy/big-swan.jpg',
                title: 'Big Swan' }
            // ,
            //
            // { src: '',
            //     srct: '',
            //     title: 'Sloth' }
        ],
        thumbnailWidth:         'auto',
        thumbnailHeight:        340,
        locationHash: false,


        thumbnailLabel: { display: true, position:'onBottomOverImage', hideIcons: true, titleFontSize: '2em', align: 'left', titleMultiLine:true, displayDescription: false},
        thumbnailToolbarImage: null,
        thumbnailToolbarAlbum: null,


        // css injected into the code.
        // title_color_#000_#23cb99 -> #000 = initial color -> #23cb99 = on hover color.
        thumbnailHoverEffect2: 'label_font-size_1em_1.5em|title_backgroundColor_rgba(255,255,255,0.34)_rgba(((255, 68, 0,0.8)|title_color_#000_#45ff49|image_scale_1.00_1.10_5000',
        touchAnimation: true,
        touchAutoOpenDelay: 800
    });
});