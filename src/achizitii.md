---
title: Achiziții publice și anunțuri de intenție, participare sau atribuire
description: |
    În vederea asigurării transparenței decizionale, contractele de achiziție publică
    sau anunțurile de intenție, participare sau atribuire publică formulate de
    aparatul de specialitate al Primăriei Sectorului 1, de către Compania de Investiții
    și Dezvoltare în Sănătate și Domenii de Interes Public-Privat Sector 1 sunt publicate
    în format electronic.
---

# Contracte de achiziții publice

<table class="table-fixed">
    <thead>
    <tr>
        <th scope="col" class="w-36">Instituție</th>
        <th scope="col" class="w-52">Operator economic</th>
        <th scope="col" class="w-48">Durata</th>
        <th scope="col">Denumire</th>
        <th scope="col" class="w-20">Preț (lei)</th>
    </tr>
    </thead>
    <tbody>
        {%- for item in achizitii -%}
        <tr>
            <td>{{ item.owner }}</td>
            <td>{{ item.company }}</td>
            <td>
                <div>{{item.startDate}} - {{ item.endDate }}</div>
                <div class="text-sm text-gray-500">Semnat pe {{ item.signDate }}</div>
            </td>
            <td>
                <a href="{{ item.url }}">{{ item.name }}</a>
            </td>
            <td>{{ item.value }}</td>
        </tr>
        {%- endfor -%}
    </tbody>
</table>

## Legislație

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