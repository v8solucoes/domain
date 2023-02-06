import { Ipermission } from "../../shared/interface";

export const _permission: Ipermission = {
  partner: [],
  client: [],
  adm: [ {

    id: 'user-adm',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    colection: 'user-adm',
    _group: [
      {
        id: 'email',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'acceptTerms',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'emailVerified',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'multiFactor',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'name',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'nivel',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'password',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'phone',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'userId',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
  
    ]
  }],
  system: [
    {
  
    id: 'user-adm',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    colection: 'user-adm',
    _group: [
      {
        id: 'email',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'acceptTerms',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'emailVerified',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'multiFactor',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'name',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'nivel',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'password',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'phone',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'userId',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
  
    ]
  },
  {
    id: 'account-adm-new',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'name',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'email',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'phone',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'password',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'acceptTerms',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
  
    ],
  },
  {
    id: 'sign-in',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'email',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'password',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
  
    ],
  },
  {
    id: 'recursive',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'any',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
    ],
  },
  {
    id: 'dashboard',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'any',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
    ],
  },
  {
    id: 'null',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'any',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
    ],
  }
  ],
}

/* export const _permission: Ipermission2 = [
  {

  id: 'user-adm',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  colection: 'user-adm',
  _group: [
    {
      id: 'email',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'acceptTerms',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'emailVerified',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'multiFactor',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'name',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'nivel',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'password',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'phone',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'userId',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },

  ]
},
{
  id: 'account-adm-new',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  _group: [
    {
      id: 'name',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'email',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'phone',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'password',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'acceptTerms',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },

  ],
},
{
  id: 'sign-in',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  _group: [
    {
      id: 'email',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
    {
      id: 'password',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },

  ],
},
{
  id: 'recursive',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  _group: [
    {
      id: 'any',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
  ],
},
{
  id: 'dashboard',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  _group: [
    {
      id: 'any',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
  ],
},
{
  id: 'null',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  _group: [
    {
      id: 'any',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
    },
  ],
}
] */