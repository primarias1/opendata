---
title: Achiziții publice și anunțuri de intenție, participare sau atribuire
description: |
    În vederea asigurării transparenței decizionale, contractele de achiziție publică
    sau anunțurile de intenție, participare sau atribuire publică formulate de
    aparatul de specialitate al Primăriei Sectorului 1, de către Compania de Investiții
    și Dezvoltare în Sănătate și Domenii de Interes Public-Privat Sector 1 sunt publicate
    în format electronic.
---

## Contracte de achiziții publice

<table class="table-fixed">
    <thead>
    <tr>
        <th scope="col" class="w-20">Instituție</th>
        <th scope="col" class="w-52">Operator economic</th>
        <th scope="col" class="w-48">Durata</th>
        <th scope="col">Denumire</th>
        <th scope="col" class="w-20">Valoare</th>
    </tr>
    </thead>
    <tbody>
        {%- for contract in contracts -%}
        <tr>
            <td><abbr title="{{ contract.buyer.name }}">{{ contract.buyer.shortName }}</abbr></td>
            <td>
                {%- for seller in contract.sellers -%}
                <div>{{ seller.shortName | default: seller.name }}</div>
                <div class="text-sm text-gray-500">
                    CUI <a href="https://www.confidas.ro/profil/{{ seller.fiscalCode }}/">{{ seller.fiscalCode }}</a>
                </div>
                {%- endfor -%}
            </td>
            <td>
                <div>{{contract.startDate | date: "%d.%m.%Y" }} - {{ contract.endDate | date: "%d.%m.%Y"  }}</div>
                <div class="text-sm text-gray-500">Semnat pe {{ contract.signingDate | date: "%d.%m.%Y" }}</div>
            </td>
            <td>
                <a href="{{ contract.documentUrl }}">{{ contract.name }}</a>
            </td>
            <td class="text-right">{{ contract.value | currency }}</td>
        </tr>
        {%- endfor -%}
    </tbody>
</table>

## Anunțuri de participare

<table class="table-fixed">
    <thead>
    <tr>
        <th scope="col" class="w-20">Instituție</th>
        <th scope="col" class="w-28">Cod SEAP</th>
        <th scope="col">Obiectul achiziției</th>
        <th scope="col" class="w-48">Procedură</th>
        <th scope="col" class="w-32">Valoare estimată</th>
    </tr>
    </thead>
    <tbody>
        {%- for notice in notices -%}
        <tr>
            <td><abbr title="{{ notice.buyer.name }}">{{ notice.buyer.shortName }}</abbr></td>
            <td>
                <div class="text-sm text-gray-500">
                    <a href="{{ notice.url }}">{{ notice.code }}</a>
                </div>
            </td>
            <td>
                {{ notice.name }}
            </td>
            <td>
                <span class="px-2 inline-flex leading-5 rounded-full bg-green-100 text-green-800">
                  {{ notice.procedureType }}
                </span>
            </td>
            <td class="text-right">{{ notice.value | currency }}</td>
        </tr>
        {%- endfor -%}
    </tbody>
</table>

<div class="container bg-gray-100 px-8 py-2 text-sm">

### Legendă

<ul>
{%- for inst in institutions -%}
    <li>
        <strong>{{ inst.shortName }}</strong>: {{ inst.name }}
    </li>
{% endfor %}
</ul>

### Legislație

Lista de legi și hotărâri de consiliu local în baza cărora sunt publicate contractele
de achiziții publice și anunțurile de participare la nivelul Sectorului 1:

* [Legea 24/2000 privind normele de tehnică legislativă pentru elaborarea actelor normative][l24]
* [Legea 544/2001 privind liberul acces la informațiile de interes public][l544]
* [Legea 52/2003 privind transparența decizională în administrația publică][l52]
* [Legea 98/2016 privin achizițiile publice][l98]
* [Hotărârea de Consiliu Local al Sectorului 1 233/22.12.2015][hcl233]
* [Hotărârea de Consiliu Local al Sectorului 1 nr 64/23.03.2021][hcl64]

[l24]: http://legislatie.just.ro/Public/DetaliiDocument/21698
[l544]: http://legislatie.just.ro/Public/DetaliiDocument/31413
[l52]: http://legislatie.just.ro/Public/DetaliiDocument/41571
[l98]: http://legislatie.just.ro/Public/DetaliiDocument/178667
[hcl233]: https://primariasector1.ro/download/hotarari-consiliu-2015/hot-233.docx
[hcl64]: https://primariasector1.ro/download/hotarari-consiliu-2021/64.2021_Anonimizat.pdf

</div>